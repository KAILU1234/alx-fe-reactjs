import { useState } from "react";
import Search from "./components/Search";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await searchUsers(searchParams);
      if (results.length === 0) {
        setError("Looks like we can't find any users matching your criteria");
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError("Looks like we can't find any users matching your criteria");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 my-4">
        GitHub User Search
      </h1>

      <Search onSearch={handleSearch} />

      {loading && <p className="text-center my-4">Loading...</p>}
      {error && <p className="text-red-500 text-center my-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {users.map((user) => (
          <div key={user.id} className="user-card border p-4 rounded shadow text-center">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="mx-auto rounded-full w-24 h-24"
            />
            <h3 className="text-xl font-semibold mt-2">{user.login}</h3>
            {user.location && <p className="text-gray-600">{user.location}</p>}
            <p className="text-gray-600">Repos: {user.public_repos}</p>
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

export default App;
