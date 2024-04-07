import { Request, Response } from "express";
import {
  DeleteLocalServerFile,
  errorResponse,
  FileUploadToLocalServer,
  hasData,
  toJson,
} from "node_custom_utils";
import { hashPassword, tokenEncode } from "../../../utils/jwt_utils";
import { User } from "../../models/user/user_model";
import { sendMail } from "../../../utils/male_utils";
import { emailTemplate } from "../../../utils/templates";
import { notification } from "../../models/user/notification_model";
import { io } from "../../..";

export const createUser = async (req: Request, res: Response) => {
  let imgFile;

  try {
    const { Name, Mail_ID, PhoneNumber, password } = req.body;
    imgFile = await FileUploadToLocalServer({
      req,
      pathToUpload: User.modelName,
    });
    var data: any = {
      name: Name,
      mobile_no: PhoneNumber,
      email: Mail_ID,
      img: imgFile,
      password: await hashPassword(password),
    };
    const user = await new User(data).save();

    await notification.create({
      user_id: user._id,
      message: "New user created: " + user.name,
    });

    io.emit("notification", { message: "New user created: " + user.name });

    if (hasData(Mail_ID)) {
      const encryptedMessage = btoa(tokenEncode({ uid: user._id, Mail_ID }));

      const url = new URL("http://localhost:3000/verify");
      url.searchParams.append("d", encryptedMessage);

      await sendMail({
        to: Mail_ID,
        subject: "Verify",
        html: emailTemplate({ link: url.toString(), user: Name }),
      });
    }
    return toJson(res, {
      data: user,
    });
  } catch (error) {
    await DeleteLocalServerFile(imgFile);
    return errorResponse(res, error);
  }
};
