import express from "express";
import { authRoutes } from "./routes/index.js";
import { errorController } from "./controllers/index.js";
import { AppError } from "./@utils/index.js";

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/v1/auth", authRoutes);

app.use("/hello", (req, res, next) => {
  const message = "Hello";
  res.status(200).json({ message });
});

app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorController);

export default app;
