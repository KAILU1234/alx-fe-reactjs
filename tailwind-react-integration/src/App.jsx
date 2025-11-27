import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">
        Responsive User Profile
      </h1>
      <UserProfile />
    </div>
  );
}

export default App;
