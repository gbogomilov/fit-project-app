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
  const res = await fetch("http://localhost:3001/auto-login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  return data;
};

export default async function Home() {
  const token = cookies().get("token");
  const data = (await autoLogin(token?.value ?? "")) ?? {
    email: "",
    userName: "",
    token: "",
  };
  return (
    <UserProvider value={data}>
      <LandingContainer />
    </UserProvider>
  );
}
