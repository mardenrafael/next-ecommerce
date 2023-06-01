import ProductCard, { ProductCardProps } from "../ProductCard/ProductCard";

export interface HorizontalListProps {
  products: ProductCardProps[]; // TODO: Achar uma representação melhro para product
}
export default function HorizontalList({
  products,
}: HorizontalListProps): JSX.Element {
  return (
    <section className="p-4">
      <header className="p-2 font-bold text-4xl">
        <h1>Destaques</h1>
      </header>
      <main className="grid grid-cols-4 gap-4">
        {products.map((item) => {
          return (
            <ProductCard
              productName={item.productName}
              productImage={item.productImage}
            />
          );
        })}
      </main>
    </section>
  );
}
