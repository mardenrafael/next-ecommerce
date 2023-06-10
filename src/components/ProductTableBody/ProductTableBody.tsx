import { useEffect, useState } from "react";
import ProductTableItem, {
  ProductTableItemProps,
} from "../ProductTableItem/ProductTableItem";

export interface ProductTableBodyProps {
  products: ProductTableItemProps[];
  pageIdx: number;
  offSet: number;
}

export default function ProductTableBody({
  products,
  pageIdx,
  offSet,
}: ProductTableBodyProps): JSX.Element {
  const [arrayToRender, setArrayToRender] = useState<ProductTableItemProps[]>();

  useEffect(() => {
    const arrayToRender: ProductTableItemProps[] = products.slice(
      offSet * pageIdx,
      10 + offSet * pageIdx
    );
    setArrayToRender(arrayToRender);
  }, [pageIdx]);

  return (
    <tbody>
      {arrayToRender &&
        arrayToRender.map(
          ({ productName, productDescription, productPrice }) => {
            return (
              <ProductTableItem
                productName={productName}
                productDescription={productDescription}
                productPrice={productPrice}
              />
            );
          }
        )}
    </tbody>
  );
}
