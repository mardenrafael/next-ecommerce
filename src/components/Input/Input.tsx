import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { HTMLInputTypeAttribute, useContext } from "react";

export interface InputProps {
  placeholder?: string;
  id?: string;
  required: boolean;
  type: HTMLInputTypeAttribute;
  name?: string;
  className?: string;
}

export default function Input({
  placeholder,
  id,
  required,
  type,
  name,
  className,
}: InputProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <input
      type={type}
      id={id ? id : "input"}
      name={name}
      className={
        className
          ? className
          : `border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
              theme == ThemeOptions.light
                ? "bg-gray-50 border-gray-300 focus:border-primary-600 focus:ring-primary-600"
                : "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-primary-500 focus:ring-primary-500"
            }`
      }
      placeholder={placeholder}
      required={required}
    />
  );
}
