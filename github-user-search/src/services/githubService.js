import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch user details by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // so App.jsx can catch it
  }
};

// Optional: search multiple users (not used in App.jsx yet)
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
