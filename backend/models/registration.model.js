import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  degree: { type: String, required: true },
  branch: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  usn: { type: String, required: true, unique: true }, // Ensure USN is unique
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  updates: { type: String, required: true },
  courseRegistered: { type: String, required: true },
});

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
