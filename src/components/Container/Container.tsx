import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { PropsWithChildren, useContext } from "react";

export interface ContainerProps extends PropsWithChildren {}

export default function Container({ children }: ContainerProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`
      h-full
      ${theme == ThemeOptions.light ? "bg-gray-50" : "bg-gray-800"}`}
    >
      {children}
    </section>
  );
}
