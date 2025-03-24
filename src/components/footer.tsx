import clsx from "clsx";

import Logo from "./logo";
import ExternalLink from "./external-link";

import { type ExternalLinkProps } from "./external-link";

import { useTranslations, useMessages } from "next-intl";

function FooterParagraphs() {
  const t = useTranslations("Global.Footer.FooterParagraphs");

  return (
    <div className={clsx("flex flex-col gap-8 pl-2", "lg:pl-4")}>
      <p className={clsx("pr-2 text-sm", "lg:text-base")}>
        {t.rich("stackDesc", {
          repo: (chunks) => (
            <ExternalLink href="https://github.com/14githubruno/my-portfolio">
              {chunks}
            </ExternalLink>
          ),
        })}
      </p>
      <p
        className={clsx(
          "mb-16 text-sm text-zinc-500 dark:text-zinc-400",
          "lg:text-base"
        )}
      >
        &copy; {new Date().getFullYear()} {t("copyright")}
      </p>
    </div>
  );
}

function Contacts() {
  const messages = useMessages();
  const contacts = messages.Global.Footer.contacts;

  return (
    <ul
      className={clsx(
        "mb-16 flex flex-col gap-4 self-end text-right text-sm",
        "md:text-base",
        "lg:flex lg:flex-col lg:gap-8"
      )}
    >
      {contacts.map((contact: ExternalLinkProps) => {
        return (
          <li key={contact.text}>
            <ExternalLink {...contact} />
          </li>
        );
      })}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className={clsx(
        "h-[calc(100vh-(120rem/8))] w-full",
        "lg:h-[calc(100vh-(90rem/8))]"
      )}
    >
      <div
        className={clsx(
          "grid h-full w-full grid-cols-2 items-end justify-between",
          "lg:grid-cols-3"
        )}
      >
        <FooterParagraphs />
        <nav
          className={clsx(
            "relative flex h-full justify-end border-l border-dashed border-pink-500 pr-2 dark:border-zinc-700",
            "lg:col-start-3 lg:col-end-4 lg:pr-4"
          )}
        >
          <Logo href="header" />
          <Contacts />
        </nav>
      </div>
    </footer>
  );
}
