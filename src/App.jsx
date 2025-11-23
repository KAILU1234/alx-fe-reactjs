import { useState } from 'react';
import { searchUsers } from './services/githubService';
import Search from './components/Search';
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 my-4">
        GitHub User Search
      </h1>
      <Search onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
