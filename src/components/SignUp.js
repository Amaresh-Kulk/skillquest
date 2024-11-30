import React, { useState } from 'react';
import '../style/SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long.';
    }
    if (!hasUpperCase) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!hasNumber) {
      return 'Password must contain at least one number.';
    }
    return '';
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required!');
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

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError('');
    console.log('Signed up with:', { username, email, password });
    alert('Sign-up successful!');
    // Add logic to send the data to a server or API here
  };

  return (
    <div className="signup">
      <div className="heading">
        <h1>Create Your Account</h1>
        <p>Please fill in the details below to sign up.</p>
      </div>
      <form onSubmit={handleSignUp} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
