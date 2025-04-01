import clsx from "clsx";
import FooterParagraphs from "./footer-paragraphs";
import Logo from "../logo";
import Contacts from "./contacts";

export default function Footer() {
  return (
    <footer id="footer" className="h-[var(--almost-h-screen)] w-full">
      <div
        className={clsx(
          "grid h-full w-full grid-cols-2 items-end justify-between px-2",
          "lg:grid-cols-3 lg:px-4"
        )}
      >
        <FooterParagraphs />
        <nav
          className={clsx(
            "relative flex h-full justify-end border-l border-dashed border-pink-500 dark:border-zinc-700",
            "lg:col-start-3 lg:col-end-4"
          )}
        >
          <Logo href="header" />
          <Contacts />
        </nav>
      </div>
    </footer>
  );
}
