import { ProductsContext } from "@/context/productsContext";
import { useContext } from "react";
import ProductTableItem from "../ProductTableItem/ProductTableItem";

export default function ProductTableBody(): JSX.Element {
  const { currentPage } = useContext(ProductsContext);

  return (
    <tbody>
      {currentPage.map(({ productName, productDescription, productPrice }) => {
        return (
          <ProductTableItem
            productName={productName}
            productDescription={productDescription}
            productPrice={productPrice}
          />
        );
      })}
    </tbody>
  );
}
