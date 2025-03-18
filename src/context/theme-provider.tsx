"use client";

// types
import { ReactNode } from "react";

// next-themes lib
import { ThemeProvider } from "next-themes";

type Props = {
  children: ReactNode;
};

export default function ThemeContextProvider({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
