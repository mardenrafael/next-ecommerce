import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { PropsWithChildren, useContext } from "react";

export interface ProductTableProps extends PropsWithChildren {}

export default function ProductTable({
  children,
}: ProductTableProps): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="p-3 sm:p-5">
      <div
        className={`relative shadow-md sm:rounded-lg
        ${theme == ThemeOptions.light ? "bg-white" : "bg-gray-800"}`}
      >
        {children}
      </div>
    </div>
  );
}
