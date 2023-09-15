import React from 'react';
import { registerUser } from '../api/registerUser';

interface RegisterFormProps {
  username: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAgeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegisterClick: () => void;
}

export const RegisterForm = ({
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        onChange={handleUsernameChange}
        value={username}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={handleEmailChange}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={handlePasswordChange}
        value={password}
      />
      <label htmlFor="age">Age</label>
      <input type="number" id="age" onChange={handleAgeChange} value={age} />
      <label htmlFor="gender">Gender</label>
      <input
        type="text"
        id="gender"
        onChange={handleGenderChange}
        value={gender}
      />

      <button type="submit">Register</button>
    </form>
  );
};
