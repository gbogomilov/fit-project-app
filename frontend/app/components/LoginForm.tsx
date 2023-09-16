import React from "react";
import { loginUser } from "../api/loginUser";
import styled from "styled-components";
import { Input } from "../styles/Input.styled";
import { Button } from "../styles/Button.styled";
import { Form } from "../styles/Form.styled";

interface RegisterFormProps {
  username: string;
  password: string;
  isLoggedIn: boolean;
  isRegistering: boolean;
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  handleRegisterClick: () => void;
}

export const LoginForm = ({
  isLoggedIn,
  isRegistering,
  username,
  password,
  handlePasswordChange,
  handleUsernameChange,
  handleLogin,
  handleRegisterClick,
}: RegisterFormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { message, userName } = await loginUser(username, password);
    if (message === "success") {
      handleLogin();
    } else {
      alert(message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <Input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <label htmlFor="password">Password</label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit">Login</Button>
      {!isLoggedIn && (
        <Button type="button" onClick={handleRegisterClick}>
          {!isRegistering ? "Register" : "Back to Login"}
        </Button>
      )}
    </Form>
  );
};
