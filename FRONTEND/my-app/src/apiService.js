// src/apiService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Adjust URL if backend is deployed elsewhere

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    return error.response?.data || { error: "Server error" };
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    return error.response?.data || { error: "Server error" };
  }
};

// apiService.js
export const forgotPassword = async (email) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email }); // Update the URL as necessary
        return response.data; // Ensure this returns an object with { success, password, message }
      } catch (error) {
        console.error("Error fetching password:", error);
        return { success: false, message: "Failed to retrieve password" };
      }
  };
  