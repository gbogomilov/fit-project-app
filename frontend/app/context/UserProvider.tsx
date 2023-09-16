"use client";
import React, { createContext, useState } from "react";

interface User {
  name: string;
  email: string;
}

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
