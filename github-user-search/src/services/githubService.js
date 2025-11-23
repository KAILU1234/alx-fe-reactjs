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

// Search multiple GitHub users with optional advanced filters
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username || "";

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
    });

    const users = response.data.items;

    // Optionally fetch extra details like public_repos for each user
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        try {
          const details = await fetchUserData(user.login);
          return { ...user, ...details };
        } catch (err) {
          return user; // fallback if detailed fetch fails
        }
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Error searching users:", error);
    return [];
  }
};
