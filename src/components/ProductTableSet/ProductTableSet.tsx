import ProductTableBody from "../ProductTableBody/ProductTableBody";
import ProductTableHeader from "../ProductTableHeader/ProductTableHeader";

export default function ProductTableSet(): JSX.Element {
  return (
    <table className={`w-full text-sm text-left text-gray-500`}>
      <ProductTableHeader />
      <ProductTableBody />
    </table>
  );
}
