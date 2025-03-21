import clsx from "clsx";
import { Link as NextIntlLink } from "@/i18n/navigation";

type LogoProps = {
  href: "header" | "footer";
};

export default function Logo({ href }: LogoProps) {
  return (
    <NextIntlLink
      aria-label={`link to ${href} section`}
      href={`#${href}`}
      className={clsx("absolute top-16 h-5 w-5 bg-pink-500", "lg:top-16")}
    />
  );
}
