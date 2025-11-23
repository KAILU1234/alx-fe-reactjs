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
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 my-4">
        GitHub User Search
      </h1>
      <Search onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {user && <UserCard user={user} />}
      </div>
    </div>
  );
}

export default App;
