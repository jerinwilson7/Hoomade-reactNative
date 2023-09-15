const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your fullname!"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
    minLength: [4, "password should be greater than 4 characters"],
    select: false,
  },
  phoneNumber: {
    type: Number,
  },
  address: [
    {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      address1: {
        type: String,
      },
      address2: {
        type: String,
      },
      zipCode: {
        type: Number,
      },
      addressType: {
        type: String,
      },
    },
  ],
  role: {
    type: String,
    default: "user",
  },
  avatar: {
    type: String,
    required: true,
  },
  orders: {
    type: mongoose.Schema.ObjectId,
    ref: "Order",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

userSchema.methods.comparePassword = async (enteredPassword, password) => {
  console.log(password);
  return await bcrypt.compare(enteredPassword, password);
};
module.exports = mongoose.model("User", userSchema);
