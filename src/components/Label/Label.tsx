import { PropsWithChildren } from "react";

export interface LabelProps extends PropsWithChildren {
  htmlFor: string;
  className?: string;
  extend?: boolean;
}

export default function Label({
  htmlFor,
  children,
  className,
  extend,
}: LabelProps): JSX.Element {
  const DEFAULT_CLASS_NAME =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white ";

  return (
    <label
      htmlFor={htmlFor}
      className={
        className
          ? extend
            ? DEFAULT_CLASS_NAME + className
            : className
          : DEFAULT_CLASS_NAME
      }
    >
      {children}
    </label>
  );
}
