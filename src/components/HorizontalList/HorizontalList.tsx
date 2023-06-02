import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { Product } from "@prisma/client";
import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import SearchSection from "../SearchSection/SearchSection";

export interface HorizontalListProps {
  products: Product[];
}
export default function HorizontalList({
  products,
}: HorizontalListProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  function renderCards(): JSX.Element[] {
    return products.map((product) => {
      return (
        <ProductCard
          productName={product.name}
          productImageUrl={product.image}
        />
      );
    });
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
      <section>
        <div>
          <SearchSection />
        </div>
      </section>
      <main className="grid grid-cols-4 gap-4">{renderCards()}</main>
    </section>
  );
}
