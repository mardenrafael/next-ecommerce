import ProductCard, { ProductCardProps } from "../ProductCard/ProductCard";

export interface HorizontalListProps {
  products: ProductCardProps[];
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
        {/* <ProductCard productImage="/" productName="Produto 1" />
        <ProductCard productImage="/" productName="Produto 2" />
        <ProductCard productImage="/" productName="Produto 3" />
        <ProductCard productImage="/" productName="Produto 4" /> */}
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
