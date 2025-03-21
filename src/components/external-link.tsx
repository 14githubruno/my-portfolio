import clsx from "clsx";
import { ReactNode } from "react";

export type ExternalLinkProps = {
  href: string;
  target?: "_blank" | "_self";
  text?: string;
  children?: ReactNode;
};

export default function ExternalLink({
  href,
  target = "_blank",
  text,
  children,
}: ExternalLinkProps) {
  if (!text && !children) return null;
  return (
    <a
      className={clsx("text-sm underline", "lg:text-base")}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children || text}
    </a>
  );
}
