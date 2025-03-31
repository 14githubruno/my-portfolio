import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
};

export default function WebsiteWrapper({ children }: Props) {
  return (
    <div
      className={clsx(
        "mx-auto my-0 flex w-full max-w-[90rem] flex-col px-6",
        "lg:gap-0 lg:border-b lg:border-dashed lg:border-pink-500 lg:p-0 dark:lg:border-zinc-700"
      )}
    >
      {children}
    </div>
  );
}
