import clsx from "clsx";
import Logo from "../logo";
import Headings from "./headings";
import ThemeSwitcher from "./theme-switcher";
import LocaleSwitcher from "./locale-switcher";

export default function Header() {
  return (
    <header
      id="header"
      className={clsx(
        "grid h-[var(--almost-h-screen)] grid-cols-2 px-2",
        "lg:grid-cols-3 lg:px-4"
      )}
    >
      <div
        className={clsx(
          "relative border-r border-dashed border-pink-500 dark:border-zinc-700"
        )}
      >
        <Logo href="footer" />
        <Headings />
      </div>
      <div
        className={clsx(
          "absolute top-16 flex flex-col items-end gap-4 self-center justify-self-end",
          "lg:gap-8 lg:pr-4"
        )}
      >
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
