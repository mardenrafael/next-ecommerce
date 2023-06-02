import { PropsWithChildren } from "react";

export interface AnchorProps extends PropsWithChildren {
  href: string;
  className?: string;
  target?: string;
}

export default function Anchor({
  href,
  className,
  target,
  children,
}: AnchorProps): JSX.Element {
  return (
    <a
      href={href}
      target={target}
      className={
        className ? className : "font-medium text-primary-600 hover:underline "
      }
    >
      {children}
    </a>
  );
}
