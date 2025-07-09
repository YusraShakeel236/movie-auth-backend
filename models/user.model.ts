import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  fullName: {
    type: String
  },
  profilePicture: {
    type: String,
    default: "https://i.imgur.com/defaultAvatar.png" // or your own default image URL
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model("User", userSchema);


