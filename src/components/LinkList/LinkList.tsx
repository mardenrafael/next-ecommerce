import { PropsWithChildren } from "react";

export interface LinkListProps extends PropsWithChildren {}

export default function LinkList({ children }: LinkListProps): JSX.Element {
  return <ul className="space-y-2">{children}</ul>;
}
