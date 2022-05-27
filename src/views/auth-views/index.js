import React, { useState } from "react";
import "./auth.css";
import Login from "./login";
const AuthViews = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="auth-main">
      <div className="auth-wrapper">
        <div className="auth-form">
          <div className="auth-title">Todo App</div>
          <div className="auth-form-content">
            <Login {...{ setIsLogin, isLogin }} />
          </div>
          <div className="auth-footer">Uğurcan Uçar</div>
        </div>
        <div className="auth-image"></div>
      </div>
    </div>
  );
};

export default AuthViews;
