import React from "react";
import { loginUser } from "../api/loginUser";
import buttonstyle from "../styles/button.module.css";
import formstyle from "../styles/form.module.css";
import inputstyle from "../styles/input.module.css";

interface RegisterFormProps {
  email: string;
  password: string;
  isLoggedIn: boolean;
  isRegistering: boolean;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (userName: string, token: string) => void;
  handleRegisterClick: () => void;
}

export const LoginForm = ({
  isLoggedIn,
  isRegistering,
  email,
  password,
  handlePasswordChange,
  handleEmailChange,
  handleLogin,
  handleRegisterClick,
}: RegisterFormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await loginUser(email, password);
    console.log(data);
    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      handleLogin(data.name, data.token);
      document.cookie = `token=${data.token}`;
    } else {
      alert(data.message);
    }
  };

  return (
    <form className={formstyle.styledform} onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        className={inputstyle.styledinput}
        type="email"
        id="username"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        className={inputstyle.styledinput}
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button className={buttonstyle.styledbutton} type="submit">
        Login
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
