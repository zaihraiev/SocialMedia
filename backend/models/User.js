const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "first name is required"],
    trim: true,
    text: true,
  },
  last_name: {
    type: String,
    required: [true, "last name is required"],
    trim: true,
    text: true,
  },
  username: {
    type: String,
    required: [true, "username is required"],
    trim: true,
    text: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  picture: {
    type: String,
    default:
      "https://res.cloudinary.com/dtduj3zbo/image/upload/v1715767425/users/vhbihnzs2pyvtyucrhy7.png",
  },
  cover: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
    trim: true,
    enum: ["Male", "Female", "Other"],
  },
  bYear: {
    type: Number,
    required: [true, "birth year is required"],
    trim: true,
  },
  bMonth: {
    type: Number,
    required: [true, "birth month is required"],
    trim: true,
  },
  bDay: {
    type: Number,
    required: [true, "birth day is required"],
    trim: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  friends: {
    type: Array,
    default: [],
  },
  friendRequests: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
  requests: {
    type: Array,
    default: [],
  },
  search: [
    {
      user: {
        type: ObjectId,
        ref: "User",
      },
    },
  ],
  details: {
    bio: {
      type: String,
    },
    otherName: {
      type: String,
    },
    job: {
      type: String,
    },
    workPlace: {
      type: String,
    },
    highSchool: {
      type: String,
    },
    college: {
      type: String,
    },
    currentCity: {
      type: String,
    },
    hometown: {
      type: String,
    },
    relationShip: {
      type: String,
      enum: ["Single", "Married", "In a relationship", "Divorced", "Widowed"],
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  savedPosts: {
    post: {
      type: ObjectId,
      ref: "Post",
    },
    savedAt: {
      type: Date,
      default: new Date(),
    },
  },
  timeStamps: {
    createdAt: {
      type: Date,
      default: new Date(),
    },
    updatedAt: {
      type: Date,
      default: new Date(),
    },
  },
});

module.exports = mongoose.model("User", userSchema);
