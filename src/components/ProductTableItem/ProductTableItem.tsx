import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { useContext } from "react";

export interface ProductTableItemProps {
  productName: string;
  productDescription: string;
  productPrice: number;
}
export default function ProductTableItem({
  productDescription,
  productName,
  productPrice,
}: ProductTableItemProps): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <tr
      className={`border-b
                  ${
                    theme == ThemeOptions.light
                      ? "border-gray-200"
                      : "border-gray-700"
                  }`}
    >
      <th
        scope="row"
        className={`px-4 py-3 font-medium whitespace-nowrap
                      ${
                        theme == ThemeOptions.light
                          ? "text-gray-900"
                          : "text-white"
                      }`}
      >
        {productName}
      </th>
      <td className="px-4 py-3">{productDescription}</td>
      <td className="px-4 py-3">R${productPrice}</td>
    </tr>
  );
}
