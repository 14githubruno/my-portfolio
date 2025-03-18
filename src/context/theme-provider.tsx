"use client";

// next-themes lib
import { ThemeProvider } from "next-themes";

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
