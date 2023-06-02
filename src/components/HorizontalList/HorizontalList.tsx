import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { Product } from "@prisma/client";
import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";

export interface HorizontalListProps {
  products: Product[];
}
export default function HorizontalList({
  products,
}: HorizontalListProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  function renderCards(): JSX.Element[] {
    return [
      <ProductCard
        productName={products[0].name}
        productImageUrl={products[0].image}
      />,
    ];
  }

  return (
    <section className="p-4">
      <header
        className={`p-2 font-bold text-4xl ${
          theme == ThemeOptions.light ? "text-gray-900" : "text-white"
        }`}
      >
        <h1>Destaques</h1>
      </header>
      <main className="grid grid-cols-4 gap-4">{renderCards()}</main>
    </section>
  );
}
