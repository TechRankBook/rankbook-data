import express from "express";
import { registerUser } from "../controllers/registration.controller.js";

const router = express.Router();

// Handle registration for specific course types
router.post("/:courseType", registerUser);

// Handle registration without a course type
router.post("/", (req, res) => {
  // If no courseType is provided, handle it here or redirect to a default courseType
  req.params.courseType = "default"; // Assign a default courseType if necessary
  registerUser(req, res);
});

export default router;
