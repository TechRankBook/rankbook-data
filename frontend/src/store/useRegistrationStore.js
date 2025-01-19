import { create } from "zustand";
import axios from "axios";

// Define the API URL based on environment
const API_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5000/api/register"
  : "/api/register";

axios.defaults.withCredentials = true;

export const useRegistrationStore = create((set) => ({
  user: null,
  error: null,
  isLoading: false,
  message: null,

  register: async (data, courseType) => {
    set({ isLoading: true, error: null });
    try {
      // Make the registration API call
      const response = await axios.post(`${API_URL}/${courseType}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      set({ user: response.data, isLoading: false, message: "Registration successful!" });
    } catch (error) {
      set({
        error: error.response?.data?.error || "An error occurred during registration.",
        isLoading: false,
      });
      throw error;
    }
  },

  checkRegistrationStatus: async (email) => {
    set({ isLoading: true, error: null });
    try {
      // Check if the user is already registered
      const response = await axios.get(`${API_URL}/status`, { params: { email } });
      set({ user: response.data, isLoading: false });
      return response.data;
    } catch (error) {
      set({ error: error.response?.data?.message || "Error checking registration status", isLoading: false });
      throw error;
    }
  },

  cancelRegistration: async (email) => {
    set({ isLoading: true, error: null });
    try {
      // Cancel a user's registration
      await axios.delete(`${API_URL}`, { data: { email } });
      set({ user: null, isLoading: false, message: "Registration canceled successfully!" });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error canceling registration",
        isLoading: false,
      });
      throw error;
    }
  },

  updateRegistration: async (email, updatedData) => {
    set({ isLoading: true, error: null });
    try {
      // Update registration details
      const response = await axios.put(`${API_URL}`, { email, ...updatedData });
      set({ user: response.data, isLoading: false, message: "Registration updated successfully!" });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error updating registration",
        isLoading: false,
      });
      throw error;
    }
  },
}));
