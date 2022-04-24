import { User } from "../models/index.js";
import { catchAsync, createSendToken, AppError } from "../@utils/index.js";

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({
    email,
    isDeleted: false,
    // status: { $ne: "banned" },
  }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // 3) If everything ok, send token to client
  createSendToken(user, 200, req, res);
});

export const register = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
  });
  createSendToken(newUser, 201, req, res);
});

export const checkAuth = catchAsync(async (req, res, next) => {
  const user = req.user;
  const token = req.token;
  res.status(200).json({
    message: "Success",
    success: true,
    result: { user, token },
  });
});
