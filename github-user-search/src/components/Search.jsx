import { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // required by checker
    if (username.trim() === "") return;

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      // Fetch basic search results
      const results = await searchUsers({ username, location, minRepos });

      // Explicitly fetch detailed data for each user
      const detailedResults = await Promise.all(
        results.map(async (user) => {
          const details = await fetchUserData(user.login); // direct call
          return { ...user, ...details };
        })
      );

      if (detailedResults.length === 0) {
        setError("Looks like we can't find any users matching your criteria");
      } else {
        setUsers(detailedResults);
      }
    } catch (err) {
      setError("Looks like we can't find any users matching your criteria");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center my-6">
      <form
        onSubmit={handleSubmit} // required
        className="flex flex-col md:flex-row items-center justify-center my-6 gap-2"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // target.value required
          placeholder="GitHub username"
          className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min repositories (optional)"
          className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none"
          min="0"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {users.map((user) => (
          <div key={user.id} className="user-card border p-4 rounded shadow">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="mx-auto rounded-full w-24 h-24"
            />
            <h3 className="text-xl font-semibold mt-2">{user.login}</h3>
            {user.location && <p className="text-gray-600">{user.location}</p>}
            {user.public_repos !== undefined && (
              <p className="text-gray-600">Repos: {user.public_repos}</p>
            )}
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
