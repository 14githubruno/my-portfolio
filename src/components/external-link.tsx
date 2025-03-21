import clsx from "clsx";
import { ReactNode } from "react";

export type ExternalLinkProps = {
  href: string;
  text: string;
  children?: ReactNode;
};

export default function ExternalLink({
  href,
  text,
  children,
}: ExternalLinkProps) {
  return (
    <a
      className={clsx("text-sm underline", "lg:text-base")}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || text}
    </a>
  );
}
