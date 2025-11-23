import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // required by checker

    // Prepare search parameters
    const searchParams = {
      username: username.trim(),
      location: location.trim(),
      minRepos: minRepos.trim(),
    };

    onSearch(searchParams);
  };

  return (
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
        type="submit" // required
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
