import { create } from "zustand";
import axios from "axios";

// Define the API URL using environment variables
const API_URL = import.meta.env.VITE_API_URL || "https://rankbook-data.onrender.com/api/register";

// Ensure axios is set up correctly with credentials
axios.defaults.withCredentials = true;

export const useRegistrationStore = create((set) => ({
  user: null,
  error: null,
  isLoading: false,
  message: null,

  // Function to register a user
  register: async (data, courseType) => {
    set({ isLoading: true, error: null });
    try {
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

  // Function to check registration status
  checkRegistrationStatus: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/status`, { params: { email } });
      set({ user: response.data, isLoading: false });
      return response.data;
    } catch (error) {
      set({ error: error.response?.data?.message || "Error checking registration status", isLoading: false });
      throw error;
    }
  },

  // Function to cancel a registration
  cancelRegistration: async (email) => {
    set({ isLoading: true, error: null });
    try {
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

  // Function to update registration details
  updateRegistration: async (email, updatedData) => {
    set({ isLoading: true, error: null });
    try {
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
