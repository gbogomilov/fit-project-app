"use client";
import React, { useContext, useEffect, useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import buttonstyle from "../styles/button.module.css";
import { UserContext } from "../context/UserProvider";
import headerStyles from "./styles/LandingContainer.module.css";

export const LandingContainer = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(user ? true : false);

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

  const handleLogin = (userName: string, token: string) => {
    setIsLoggedIn(true);
    setUser({ name: userName, email: email, token });
  };

  const handleLogout = () => {
    const autoLogin = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await fetch("http://localhost:3001/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
      } catch (err) {
        console.log(err);
      } finally {
        document.cookie = "";
        setIsLoggedIn(false);
        setUser(null);
      }
    };
    autoLogin();
  };

  const handleRegisterClick = () => {
    setIsRegistering(!isRegistering);
  };

  useEffect(() => {}, [user]);

  return (
    <>
      <h1 className={headerStyles.header}>
        Fit App &nbsp;
        {user && `Welcome! ${user.name}`}
        {isLoggedIn && (
          <button
            className={buttonstyle.styledbutton}
            type="button"
            onClick={handleLogout}
          >
            logout
          </button>
        )}
      </h1>
      {!isRegistering && !isLoggedIn && (
        <LoginForm
          isLoggedIn={isLoggedIn}
          isRegistering={isRegistering}
          handleRegisterClick={handleRegisterClick}
          email={email}
          password={password}
          handleEmailChange={handleEmailChange}
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
      {isLoggedIn && (
        <div>
          <h2>Dashboard</h2>
        </div>
      )}
    </>
  );
};
