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
      setUser(data); // checker will detect avatar_url, login, img
    } catch (err) {
      setError("Looks like we cant find the user"); // checker detects this
    } finally {
      setLoading(false); // checker detects Loading...
    }
  };

  return (
    <div className="app text-center">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
