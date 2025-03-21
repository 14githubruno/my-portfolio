import clsx from "clsx";

export type ExternalLinkProps = {
  href: string;
  text: string;
};

export default function ExternalLink({ href, text }: ExternalLinkProps) {
  return (
    <a
      className={clsx("text-sm underline", "lg:text-base")}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
