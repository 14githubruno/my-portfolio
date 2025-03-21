"use client";

import { ReactNode } from "react";
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
