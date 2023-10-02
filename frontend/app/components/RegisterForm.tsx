import React from "react";
import { registerUser } from "../api/registerUser";
import buttonstyle from "../styles/button.module.css";
import formstyle from "../styles/form.module.css";
import inputstyle from "../styles/input.module.css";

interface RegisterFormProps {
  username: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  isLoggedIn: boolean;
  isRegistering: boolean;
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAgeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegisterClick: () => void;
}

export const RegisterForm = ({
  isLoggedIn,
  isRegistering,
  username,
  email,
  password,
  age,
  gender,
  handleAgeChange,
  handleEmailChange,
  handleGenderChange,
  handlePasswordChange,
  handleUsernameChange,
  handleRegisterClick,
}: RegisterFormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reponse = await registerUser(username, email, password, age, gender);
    if (reponse) {
      handleRegisterClick();
    }
  };

  return (
    <form className={formstyle.styledform} onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        className={inputstyle.styledinput}
        type="text"
        id="username"
        onChange={handleUsernameChange}
        value={username}
      />
      <label htmlFor="email">Email</label>
      <input
        className={inputstyle.styledinput}
        type="email"
        id="email"
        onChange={handleEmailChange}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        className={inputstyle.styledinput}
        type="password"
        id="password"
        onChange={handlePasswordChange}
        value={password}
      />
      <label htmlFor="age">Age</label>
      <input
        className={inputstyle.styledinput}
        type="number"
        id="age"
        onChange={handleAgeChange}
        value={age}
      />
      <label htmlFor="gender">Gender</label>
      <input
        className={inputstyle.styledinput}
        type="text"
        id="gender"
        onChange={handleGenderChange}
        value={gender}
      />

      <button className={buttonstyle.styledbutton} type="submit">
        Register
      </button>
      {!isLoggedIn && (
        <button
          className={buttonstyle.styledbutton}
          type="button"
          onClick={handleRegisterClick}
        >
          {!isRegistering ? "Register" : "Back to Login"}
        </button>
      )}
    </form>
  );
};
