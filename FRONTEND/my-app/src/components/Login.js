import React, { useState } from "react";
import { loginUser } from "../apiService";
import "../styles.css";

const Login = ({ navigateToSignup, navigateToForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    if (result.token) {
      // Store token in localStorage (or context if needed)
      localStorage.setItem("token", result.token);
      setMessage("Login successful!");
      // Redirect to dashboard or main page
    } else {
      setMessage(result.message || "Login failed");
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <div className="auth-links">
        <a onClick={navigateToSignup}>Sign up</a>
        <a onClick={navigateToForgotPassword}>Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;
