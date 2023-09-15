import React from 'react';
import { loginUser } from '../api/loginUser';

interface RegisterFormProps {
  username: string;
  password: string;
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
}

export const LoginForm = ({
  username,
  password,
  handlePasswordChange,
  handleUsernameChange,
  handleLogin,
}: RegisterFormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { message, userName } = await loginUser(username, password);
    if (message === 'success') {
      alert('welcome: ' + userName);
      handleLogin();
    } else {
      alert(message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};
