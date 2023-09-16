import React from "react";
import { registerUser } from "../api/registerUser";
import { Button } from "../styles/Button.styled";
import { Form } from "../styles/Form.styled";
import { Input } from "../styles/Input.styled";

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
    <Form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <Input
        type="text"
        id="username"
        onChange={handleUsernameChange}
        value={username}
      />
      <label htmlFor="email">Email</label>
      <Input
        type="email"
        id="email"
        onChange={handleEmailChange}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <Input
        type="password"
        id="password"
        onChange={handlePasswordChange}
        value={password}
      />
      <label htmlFor="age">Age</label>
      <Input type="number" id="age" onChange={handleAgeChange} value={age} />
      <label htmlFor="gender">Gender</label>
      <Input
        type="text"
        id="gender"
        onChange={handleGenderChange}
        value={gender}
      />

      <Button type="submit">Register</Button>
      {!isLoggedIn && (
        <Button type="button" onClick={handleRegisterClick}>
          {!isRegistering ? "Register" : "Back to Login"}
        </Button>
      )}
    </Form>
  );
};
