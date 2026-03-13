import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name"],
    },
    email: {
      type: String,
      required: [true, "please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please add a password"],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["surveyor", "admin"],
      default: "surveyor",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);
const user = mongoose.model("user", userSchema);
export default user;
