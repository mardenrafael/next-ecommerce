import { PropsWithChildren } from "react";

export interface LabelProps extends PropsWithChildren {
  htmlFor: string;
}

export default function Label({ htmlFor, children }: LabelProps): JSX.Element {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
    </label>
  );
}
