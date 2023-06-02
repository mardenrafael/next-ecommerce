import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { PropsWithChildren, useContext } from "react";

export interface SectionContainerProps extends PropsWithChildren {}

export default function SectionContainer({
  children,
}: SectionContainerProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={theme == ThemeOptions.light ? "bg-gray-50" : "bg-gray-900"}
    >
      {children}
    </section>
  );
}
