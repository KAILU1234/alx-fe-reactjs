import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch single GitHub user details by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // so Search.jsx can catch it
  }
};

// Search multiple GitHub users with optional filters
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username || "";

    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items || [];
  } catch (error) {
    console.error("Error searching users:", error);
    return [];
  }
};
