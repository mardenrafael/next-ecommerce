import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { useContext } from "react";

export default function ProductTableHeader(): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <thead
      className={`text-xs uppercase
                ${
                  theme == ThemeOptions.light
                    ? "text-gray-700 bg-gray-50"
                    : "bg-gray-700 text-gray-400"
                }`}
    >
      <tr>
        <th scope="col" className="px-4 py-3">
          Nome do produto
        </th>
        <th scope="col" className="px-4 py-3">
          Descrição do produto
        </th>
        <th scope="col" className="px-4 py-3">
          Preço
        </th>
      </tr>
    </thead>
  );
}
