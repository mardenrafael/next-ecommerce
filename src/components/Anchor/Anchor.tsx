import { PropsWithChildren } from "react";

export interface AnchorProps extends PropsWithChildren {
  href: string;
}

export default function Anchor({ href, children }: AnchorProps): JSX.Element {
  return (
    <a
      href={href}
      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
    >
      {children}
    </a>
  );
}
