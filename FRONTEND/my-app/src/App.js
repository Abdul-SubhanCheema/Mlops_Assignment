import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

const AuthApp = () => {
  const [currentPage, setCurrentPage] = useState("login");

  const navigateToSignup = () => setCurrentPage("signup");
  const navigateToLogin = () => setCurrentPage("login");
  const navigateToForgotPassword = () => setCurrentPage("forgot-password");

  return (
    <div>
      {currentPage === "login" && <Login navigateToSignup={navigateToSignup} navigateToForgotPassword={navigateToForgotPassword} />}
      {currentPage === "signup" && <Signup navigateToLogin={navigateToLogin} />}
      {currentPage === "forgot-password" && <ForgotPassword navigateToLogin={navigateToLogin} />}
    </div>
  );
};

export default AuthApp;
