import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { PropsWithChildren, useContext } from "react";

export interface LabelProps extends PropsWithChildren {
  htmlFor: string;
  className?: string;
}

export default function Label({
  htmlFor,
  children,
  className,
}: LabelProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <label
      htmlFor={htmlFor}
      className={
        className
          ? className
          : `block mb-2 text-sm font-medium ${
              theme == ThemeOptions.light ? "text-gray-900" : "text-white"
            }`
      }
    >
      {children}
    </label>
  );
}
