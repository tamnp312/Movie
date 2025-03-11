import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateTokenAndSetCookie } from "./../utils/generateToken.js";

const singup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    const existingUserByEmail = await userModel.findOne({ email });

    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }
    const existingUserByUsername = await userModel.findOne({ username });

    if (existingUserByUsername) {
      return res
        .status(400)
        .json({ message: "User with this username already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      username,
      email,
      password: passwordHash,
    });

    generateTokenAndSetCookie(newUser._id, res);
    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: "User has been created",
      user: {
        ...savedUser._doc,
        password: "",
      },
    });
  } catch (error) {}
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        password: "",
      },
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token_user_movie");
    res.status(200).json({
      success: true,
      message: "User has been logged out",
    });
  } catch (error) {
    console.log("Error logging out user: ", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { singup, signin, logout };
