import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch single GitHub user details by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // so Search.jsx can catch and display error
  }
};

// Optional: search multiple users (not used directly in current Search.jsx)
export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error searching users:", error);
    return [];
  }
};
