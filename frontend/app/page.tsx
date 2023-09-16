import React from "react";
import { LandingContainer } from "./containers/LandingContainer";
import { UserProvider } from "./context/UserProvider";

export default function Home() {
  return (
    <UserProvider>
      <LandingContainer />
    </UserProvider>
  );
}
