import { PropsWithChildren } from "react";

export interface ButtonListItemsProps extends PropsWithChildren {}

export default function LinkListItem({
  children,
}: ButtonListItemsProps): JSX.Element {
  return <li>{children}</li>;
}
