import React, { useState } from "react";
import { useRegistrationStore } from "./useRegistrationStore";

const RegistrationForm = () => {
  const { register, isLoading, error, message } = useRegistrationStore();
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    degree: "",
    branch: "",
    phoneNumber: "",
    email: "",
    address: "",
    dob: "",
    usn: "",
    courseType: "UG", // Default course type
    updates: false, // Whether the user wants updates
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData, formData.courseType);
      alert(message || "Registration Successful!");
    } catch (err) {
      alert(error || "An error occurred during registration.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Register for Test</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="college"
        placeholder="College"
        value={formData.college}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={formData.degree}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="branch"
        placeholder="Branch"
        value={formData.branch}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="usn"
        placeholder="USN"
        value={formData.usn}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <select
        name="courseType"
        value={formData.courseType}
        onChange={handleChange}
        required
      >
        <option value="UG">UG</option>
        <option value="PG">PG</option>
        <option value="Engineering">Engineering</option>
        <option value="Diploma">Diploma</option>
      </select>
      <label>
        <input
          type="checkbox"
          name="updates"
          checked={formData.updates}
          onChange={handleChange}
        />
        Receive Updates
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </form>
  );
};

export default RegistrationForm;
