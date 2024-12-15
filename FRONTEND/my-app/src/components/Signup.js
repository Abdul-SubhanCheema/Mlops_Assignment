import React, { useState } from "react";
import { registerUser } from "../apiService";

const Signup = ({ navigateToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const result = await registerUser(email, password);
    setMessage(result.message || "Registration failed");
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      <div className="auth-links">
        <a onClick={navigateToLogin}>Back to Login</a>
      </div>
    </div>
  );
};

export default Signup;
