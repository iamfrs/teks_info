import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  mobile_no: string;
  email: string;
  img: string;
  password: string;
  apiKey: string;
  otp: number;
  active:boolean;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    mobile_no: {
      type: String,
      required: [true, "Provide phone number"],
      // minlength: [10, "Mobile number must be at least 10 digits"],
      // maxlength: [10, "Mobile number cannot exceed 10 digits"],
      validate: {
        validator: /^[6-9]\d{9}$/,
        message:
          "Mobile number must start with 6, 7, 8, or 9 and be 10 digits long",
      },
    },
    email: {
      type: String,
      required: [true, "Provide email"],
      trim: true,
      match: /.+\@.+\..+/,
      unique: true,
    },
    img: {
      type: String,
    },
    password: {
      type: String,
    },
    apiKey: {
      type: String,
    },
    otp: {
      type: Number,
    },
    active:{
        type:Boolean,
        default:false
    }
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
