import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log("Form submitted:", formData);
    // Here you can call a mock API if needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
}
