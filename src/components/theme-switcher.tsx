"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const baseSwitcherClasses = "cursor-pointer border";

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <button className="h-2 w-2 bg-zinc-800"></button>;
  }

  if (resolvedTheme === "dark") {
    return (
      <button
        aria-label="light mode switcher"
        className={baseSwitcherClasses}
        onClick={() => setTheme("light")}
      >
        light
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        aria-label="dark mode switcher"
        className={baseSwitcherClasses}
        onClick={() => setTheme("dark")}
      >
        dark
      </button>
    );
  }
}
