import clsx from "clsx";
import NativeLink from "../../native-link";
import { type NativeLinkProps } from "../../native-link";
import { useMessages } from "next-intl";

export default function Contacts() {
  /* This is a test,
     see also AboutSection and ProjectsSection  */
  const messages = useMessages();
  const contacts = messages.Global.Footer.Contacts;

  return (
    <ul
      className={clsx(
        "mb-16 flex flex-col gap-4 self-end text-right text-sm",
        "md:text-base",
        "lg:gap-8"
      )}
    >
      {contacts.map((contact: NativeLinkProps) => {
        return (
          <li key={contact.text}>
            <NativeLink {...contact} />
          </li>
        );
      })}
    </ul>
  );
}
