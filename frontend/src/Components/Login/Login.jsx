import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="form-box">
      <form className="form">
        <span className="title">Welcome</span>
        <span className="subtitle">Please log in to continue.</span>
        <div className="form-container">
          <input
            type="email"
            className="input"
            placeholder="Email"
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
          />
        </div>
        <button type="submit">Log In</button>
        <div className="form-section">
          <p>Don't have an account? <Link to="/sign-in">Sign In</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
