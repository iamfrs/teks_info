import { Request, Response } from "express";
import { errorResponse, hasData, toJson } from "node_custom_utils";
import { comparePassword, tokenEncode } from "../../../utils/jwt_utils";
import { User } from "../../models/user/user_model";

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { PhoneNumber, password } = req.body;

    if (!(hasData(PhoneNumber) && hasData(password))) {
      throw new Error("Both the phone and password are required fields.");
    }

    let user = await User.findOne({
      mobile_no: PhoneNumber,
    });

    if (!user) {
      throw new Error(
        "It appears that the admin credentials provided are invalid."
      );
    }

    const passwordValidate = await comparePassword(
      password,
      user?.password ?? ""
    );

    if (!passwordValidate) {
      throw new Error("The phone or password provided is not valid.");
    }

    const apiKey = tokenEncode(user?._id);

    await User.findByIdAndUpdate(user?._id, { apiKey });

    return toJson(res, {
      data: {
        user_id: user?._id,
        apiKey,
      },
    });
  } catch (error) {
    return errorResponse(res, error);
  }
};
