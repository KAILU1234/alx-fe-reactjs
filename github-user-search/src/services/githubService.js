import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch details of a single GitHub user by username.
 * @param {string} username - GitHub username to fetch.
 * @returns {Promise<Object>} User data object.
 * @throws Will throw an error if the request fails.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Let App.jsx handle the error
  }
};

/**
 * Optional: Search multiple GitHub users by query string.
 * @param {string} query - Search term for users.
 * @returns {Promise<Array>} Array of user items.
 */
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
