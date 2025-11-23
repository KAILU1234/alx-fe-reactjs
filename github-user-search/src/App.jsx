import { useState } from "react";
import { fetchUserData } from "./services/githubService";
import Search from "./components/Search";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-3xl font-bold text-blue-600 my-4">
        GitHub User Search
      </h1>

      <Search onSearch={handleSearch} />

      {loading && <p className="my-4">Loading...</p>}
      {error && <p className="text-red-500 my-4">{error}</p>}
      {user && (
        <div className="flex justify-center mt-4">
          <UserCard user={user} />
        </div>
      )}
    </div>
  );
}

export default App;
