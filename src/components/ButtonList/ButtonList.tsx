import { PropsWithChildren } from "react";

export interface ButtonListProps extends PropsWithChildren {}

export default function ButtonList({ children }: ButtonListProps): JSX.Element {
  return <ul className="space-y-2">{children}</ul>;
}
