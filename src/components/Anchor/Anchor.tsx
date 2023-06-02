import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { PropsWithChildren, useContext } from "react";

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
  const { theme } = useContext(ThemeContext);

  return (
    <a
      href={href}
      target={target}
      className={
        className
          ? className
          : `font-medium hover:underline ${
              theme == ThemeOptions.light
                ? "text-primary-600"
                : "text-primary-500"
            }`
      }
    >
      {children}
    </a>
  );
}
