import React from "react";
import { LandingContainer } from "./containers/LandingContainer";
import { UserProvider } from "./context/UserProvider";
import { cookies } from "next/headers";

export interface HomeProps {
  userName: string;
  email: string;
  token: string;
}

export const autoLogin = async (token: string) => {
  if (!token) return;
  try {
    const res = await fetch("http://localhost:3001/auto-login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.status === 401) {
      return null;
    }
    return data;
  } catch (error) {
    return null;
  }
};

export default async function Home() {
  const token = cookies().get("token");
  const data = await autoLogin(token?.value ?? "");
  return (
    <UserProvider value={data}>
      <LandingContainer />
    </UserProvider>
  );
}
