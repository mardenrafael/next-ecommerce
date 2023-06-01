import { PropsWithChildren } from "react";

export interface AnchorProps extends PropsWithChildren {
  href: string;
  className?: string;
  extend?: boolean;
  target?: string;
  blankStyle?: boolean;
}

export default function Anchor({
  href,
  className,
  extend,
  target,
  blankStyle,
  children,
}: AnchorProps): JSX.Element {
  const DEFAULT_CLASS_NAME =
    "font-medium text-primary-600 hover:underline dark:text-primary-500 ";

  return (
    <a
      href={href}
      target={target}
      className={
        blankStyle
          ? ""
          : className
          ? extend
            ? DEFAULT_CLASS_NAME + className
            : className
          : DEFAULT_CLASS_NAME
      }
    >
      {children}
    </a>
  );
}
