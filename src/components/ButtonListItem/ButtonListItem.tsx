import { ThemeContext } from "@/context/themeContext";
import { PropsWithChildren, useContext } from "react";

export interface ButtonListItemsProps extends PropsWithChildren {}

export default function ButtonListItem({
  children,
}: ButtonListItemsProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return <li>{children}</li>;
}
