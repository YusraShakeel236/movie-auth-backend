import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", userRoutes);

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(5000, () => {
      console.log("🚀 Server running on http://localhost:5000");
    });
  })
  .catch((err: unknown) => {
    console.error("❌ MongoDB connection failed:", err);
  });
