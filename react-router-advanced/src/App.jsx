import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserProfile from "./components/UserProfile";
import BlogPost from "./components/BlogPost"; // import BlogPost

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;
