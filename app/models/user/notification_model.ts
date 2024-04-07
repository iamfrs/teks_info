import mongoose, { Document, Schema, SchemaTypes } from "mongoose";
import { User } from "./user_model";

export interface Inotification extends Document {
  user_id: any;
  message: string;
}

const notificationSchema: Schema = new Schema(
  {
    user_id: {
      type: SchemaTypes.ObjectId,
      ref: User.modelName,
      required: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export const notification = mongoose.model<Inotification>(
  "notification",
  notificationSchema
);
