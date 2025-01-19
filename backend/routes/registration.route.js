import express from "express";
import { registerUser } from "../controllers/registration.controller.js";

const router = express.Router();

// Handle registration for specific course types
router.post("/:courseType", registerUser);

export default router;
