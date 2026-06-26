import User from "../models/user.model.js";

// Login User
export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("Email and Password are required");
      error.status = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }

    if (password !== existingUser.password) {
      const error = new Error("Invalid Password");
      error.status = 401;
      return next(error);
    }

    res.status(200).json({
      message: "Welcome Back",
      data: existingUser,
    });

  } catch (error) {
    next(error);
  }
};

// Register User
export const RegisterUser = async (req, res, next) => {
  try {

    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName
      .charAt(0)
      .toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({
      message: "User Created Successfully",
      data: newUser,
    });

  } catch (error) {
    next(error);
  }
};