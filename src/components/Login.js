import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = 8; // Minimum length of the password
    const hasUpperCase = /[A-Z]/.test(password); // Check for uppercase letters
    const hasNumber = /[0-9]/.test(password); // Check for at least one number

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long.';
    }
    if (!hasUpperCase) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!hasNumber) {
      return 'Password must contain at least one number.';
    }
    return ''; // Password is valid
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required!');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address!');
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setError('');
    console.log('Logged in with:', { email, password });
    alert('Login successful!');
  };

  return (
    <div className="login">
      <div className="heading">
        <h1>Sign in to your account</h1>
        <p>
          Don't have an account? <Link to="/SignUp">Sign up</Link>
        </p>
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn-primary">Sign In</button>
        <p className="forgot-password">
          <Link to="/ForgotPassword">Forgot your password?</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
