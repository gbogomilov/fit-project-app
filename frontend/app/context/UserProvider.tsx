"use client";
import React, { createContext, useState } from "react";

interface User {
  name: string;
  email: string;
  token: string;
}

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
  value?: User;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ value, children }: UserProviderProps) => {
  console.log(value);
  const [user, setUser] = useState<User | null>(value ? value : null);
  console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
