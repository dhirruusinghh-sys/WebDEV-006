import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    photo: {
      url: {
        type: String,
      },

      publicId: {
        type: String,
      },
    },
    password: {
      type: String,
      required: true,
    },

    dob: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("user", UserSchema);
export default User;
