import React, { useState } from "react";
import { forgotPassword } from "../apiService"; // This should fetch the password based on the email

const ForgotPassword = ({ navigateToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const result = await forgotPassword(email);
  
    console.log("API Result:", result);
    
    if (result.success) {
     
      setPassword(result.password); 
      setMessage("Your password is displayed below:");
    } else {
      setMessage(result.message || "Failed to retrieve password");
    }
  };
  

  return (
    <div className="auth-form">
      <h2>Forgot Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Retrieve Password</button>
      </form>
      {password && <div className="password-display">Password: {password}</div>}
      <div className="auth-links">
        <a onClick={navigateToLogin}>Back to Login</a>
      </div>
    </div>
  );
};

export default ForgotPassword;
