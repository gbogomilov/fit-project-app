"use client";
import React, { useContext, useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { Button } from "../styles/Button.styled";
import styled from "styled-components";
import { UserContext } from "../context/UserProvider";

export const LandingContainer = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
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
    setUser({ name: username, email: email });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegisterClick = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <>
      <Header>
        Fit App &nbsp;
        {user && `Welcome! ${user.name}`}
        {isLoggedIn && (
          <Button type="button" onClick={handleLogout}>
            logout
          </Button>
        )}
      </Header>
      {!isRegistering && !isLoggedIn && (
        <LoginForm
          isLoggedIn={isLoggedIn}
          isRegistering={isRegistering}
          handleRegisterClick={handleRegisterClick}
          username={username}
          password={password}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleLogin={handleLogin}
        />
      )}
      {isRegistering && (
        <RegisterForm
          isLoggedIn={isLoggedIn}
          isRegistering={isRegistering}
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
    </>
  );
};

const Header = styled.h1`
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  button {
    position: relative;
    top: 0.5rem;
  }
`;
