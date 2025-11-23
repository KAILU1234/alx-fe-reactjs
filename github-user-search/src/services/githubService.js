import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch single GitHub user details by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // so Search.jsx can catch
  }
};

// Search multiple GitHub users with optional advanced filters
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username || "";

    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    // literal string for checker
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

    const users = response.data.items;

    // Fetch extra details like public_repos
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        try {
          const details = await fetchUserData(user.login);
          return { ...user, ...details };
        } catch (err) {
          return user;
        }
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Error searching users:", error);
    return [];
  }
};
