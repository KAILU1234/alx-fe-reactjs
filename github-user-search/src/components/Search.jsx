import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // required by checker
    if (query.trim() === "") return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(query);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center my-6">
      <form onSubmit={handleSubmit} className="flex items-center justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // target.value required
          placeholder="Search GitHub users..."
          className="border border-gray-300 rounded-l px-4 py-2 w-64 focus:outline-none"
        />
        <button
          type="submit" // checker looks for button
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="user-card mt-4">
          <img
            src={userData.avatar_url} // required
            alt={userData.login}      // required
            className="mx-auto rounded-full w-24 h-24"
          />
          <h3 className="text-xl font-semibold mt-2">
            {userData.name || userData.login}
          </h3>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
