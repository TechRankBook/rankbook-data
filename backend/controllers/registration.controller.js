import Registration from "../models/registration.model.js";

export const registerUser = async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);
    console.log("Incoming request params:", req.params);

    const { name, college, degree, branch, phoneNumber, email, usn, address, dob, updates } = req.body;
    const { courseType } = req.params;

    if (!name || !email || !usn) {
      console.error("Validation Error: Missing required fields.");
      return res.status(400).json({ error: "Name, email, and USN are required fields." });
    }

    // Check for duplicate email, phone number, or USN
    const existingUser = await Registration.findOne({
      $or: [{ email }, { phoneNumber }, { usn }],
    });

    if (existingUser) {
      let errorMessage = "Duplicate entry found:";
      if (existingUser.email === email) errorMessage += " Email";
      if (existingUser.phoneNumber === phoneNumber) errorMessage += " Phone Number";
      if (existingUser.usn === usn) errorMessage += " USN";

      console.error(errorMessage);
      return res.status(400).json({ error: errorMessage.trim() });
    }

    const newRegistration = new Registration({
      name,
      college,
      degree,
      branch,
      phoneNumber,
      email,
      usn,
      address,
      dob,
      updates,
      courseRegistered: courseType,
    });

    const savedRegistration = await newRegistration.save();
    console.log("Saved Registration:", savedRegistration);

    res.status(201).json({ message: `Successfully registered for ${courseType}` });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "An error occurred during registration." });
  }
};
