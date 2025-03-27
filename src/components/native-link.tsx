import clsx from "clsx";
import { ReactNode } from "react";

export type NativeLinkProps = {
  href: string;
  target?: "_blank" | "_self";
  text?: string;
  children?: ReactNode;
};

/**
 * @note This component will be used when Next.js <Link> component is not needed
 */
export default function NativeLink({
  href,
  target = "_blank",
  text,
  children,
}: NativeLinkProps) {
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
