// types
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

/**
 * Since we have a `not-found.tsx` page on the root, we need a layout file.
 */
export default function RootLayout({ children }: LayoutProps) {
  return children;
}
