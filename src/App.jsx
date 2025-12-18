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
  );
}

export default App;
