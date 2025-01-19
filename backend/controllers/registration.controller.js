import Registration from "../models/registration.model.js";

export const registerUser = async (req, res) => {
  try {
    const { name, college, degree, branch, phoneNumber, email, usn, address, dob, updates } = req.body;
    const { courseType } = req.params;

    // Check for duplicate email, phone number, or USN
    const existingUser = await Registration.findOne({
      $or: [{ email }, { phoneNumber }, { usn }],
    });

    if (existingUser) {
      let errorMessage = "Duplicate entry found:";
      if (existingUser.email === email) errorMessage += " Email";
      if (existingUser.phoneNumber === phoneNumber) errorMessage += " Phone Number";
      if (existingUser.usn === usn) errorMessage += " USN";

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

    await newRegistration.save();
    res.status(201).json({ message: `Successfully registered for ${courseType}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during registration." });
  }
};
