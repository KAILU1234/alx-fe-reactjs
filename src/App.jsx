<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";

function App() {
  const isAuthenticated = false; // simulate authentication

  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route
    path="/profile/*"
    element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
  />
  <Route path="/user/:id" element={<UserProfile />} />
</Routes>

    </Router>
=======
<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
>>>>>>> 0d384638e173ea88eb84de1a0475d21930817ed0
  );
}

export default App;
<<<<<<< HEAD
=======
>>>>>>> 06dce3b357334283e966d19f2a2f329f059518cc
>>>>>>> 0d384638e173ea88eb84de1a0475d21930817ed0
