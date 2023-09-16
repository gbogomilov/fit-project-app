import "./styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import StyledComponentsRegistry from "./registry";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Fit App",
  description: "Welcome to Fit App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
