import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import cors from "cors";

import { authRoutes, phraseRoutes } from "./routes/index.js";
import { errorController } from "./controllers/index.js";
import { AppError } from "./@utils/index.js";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(cors());
}

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );
}
app.options("*", cors());
app.use(helmet());

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/phrases", phraseRoutes);

app.use("/hello", (req, res, next) => {
  const message = "Hello";
  res.status(200).json({ message });
});

app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorController);

export default app;
