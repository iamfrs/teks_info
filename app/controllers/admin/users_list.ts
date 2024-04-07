import { Request, Response } from "express";
import { errorResponse, toJson } from "node_custom_utils";
import { User } from "../../models/user/user_model";
import { PipelineStage } from "mongoose";

export const usersList = async (req: Request, res: Response) => {
  try {
    const UserPipeline: PipelineStage[] = [
      {
        $addFields: {
          img: {
            $cond: {
              if: { $eq: [{ $type: "$img" }, "string"] },
              then: { $concat: [process.env.BASE_URL, "$img"] },
              else: process.env.DEFAULT_IMAGE_URL,
            },
          },
        },
      },
      {
        $unset: ["otp", "api_key", "password"],
      },
      { $sort: { _id: -1 } },
    ];
    const UserList = await User.aggregate(UserPipeline);
    return toJson(res, {
      data: UserList,
    });
  } catch (error) {
    return errorResponse(res, error);
  }
};
