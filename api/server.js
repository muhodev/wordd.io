import "dotenv/config";
import mongoose from "mongoose";

import app from "./app.js";
import { PORT, MONGO_DB_URI } from "./@constants/index.js";

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

app.listen(PORT, () => {
  console.log(`App running is on ${PORT} port.`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  // server.close(() => {
  //   process.exit(1);
  // });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  // server.close(() => {
  //   console.log("💥 Process terminated!");
  // });
});
