import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  placeholder?: string;
  id?: string;
  required: boolean;
  type: HTMLInputTypeAttribute;
  name?: string;
  className?: string;
  extend?: boolean;
}

export default function Input({
  placeholder,
  id,
  required,
  type,
  name,
  className,
  extend,
}: InputProps) {
  const DEFAULT_CLASS_NAME =
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ";

  return (
    <input
      type={type}
      id={id ? id : "input"}
      name={name}
      className={
        className
          ? extend
            ? DEFAULT_CLASS_NAME + className
            : className
          : DEFAULT_CLASS_NAME
      }
      placeholder={placeholder}
      required={required}
    />
  );
}
