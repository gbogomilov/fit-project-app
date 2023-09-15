'use client';
import React, { useState } from 'react';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';

export const LandingContainer = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(e.target.value));
  };
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegisterClick = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <>
      <h1>Fit App</h1>
      {!isRegistering && !isLoggedIn && (
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleLogin={handleLogin}
        />
      )}
      {isRegistering && (
        <RegisterForm
          username={username}
          email={email}
          password={password}
          age={age}
          gender={gender}
          handleUsernameChange={handleUsernameChange}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleAgeChange={handleAgeChange}
          handleGenderChange={handleGenderChange}
          handleRegisterClick={handleRegisterClick}
        />
      )}
      {!isLoggedIn && (
        <button type="button" onClick={handleRegisterClick}>
          {!isRegistering ? 'Register' : 'Back to Login'}
        </button>
      )}
      {isLoggedIn && (
        <button type="button" onClick={handleLogout}>
          logout
        </button>
      )}
    </>
  );
};
