import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";
import registrationRoutes from "./routes/registration.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const cors = require("cors");

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // Use CLIENT_URL from env
    credentials: true, // Allow cookies
  })
);

  
  

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);
app.use("/api/register", registrationRoutes); // Fixed path for registration routes

if (process.env.NODE_ENV === "production") {
	// Serve static files from the frontend build directory
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
  
	// Serve frontend for non-API routes
	app.get("*", (req, res) => {
	  if (!req.path.startsWith("/api")) { // Exclude API routes
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	  }
	});
  }
  

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});





//5382434cf4ed2c5f7dc35728cc32534a - TOKEN