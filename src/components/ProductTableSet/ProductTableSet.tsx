import ProductTableBody from "../ProductTableBody/ProductTableBody";
import ProductTableHeader from "../ProductTableHeader/ProductTableHeader";
import { ProductTableItemProps } from "../ProductTableItem/ProductTableItem";

export interface ProductTableSetProps {
  products: ProductTableItemProps[];
}

export default function ProductTableSet({
  products,
}: ProductTableSetProps): JSX.Element {
  return (
    <table className={`w-full text-sm text-left text-gray-500`}>
      <ProductTableHeader />
      <ProductTableBody products={products} />
    </table>
  );
}
