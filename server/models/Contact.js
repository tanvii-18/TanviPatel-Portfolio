import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
      lowercase: true,
    },
    message: {
      type: String,
      required: [true, "Please provide a message"],
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [5000, "Message cannot exceed 5000 characters"],
    },
    status: {
      type: String,
      enum: ["new", "read", "archived"],
      default: "new",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Contact", contactSchema);
