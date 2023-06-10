import { useEffect, useState } from "react";
import ProductTableItem, {
  ProductTableItemProps,
} from "../ProductTableItem/ProductTableItem";

export interface ProductTableBodyProps {
  products: ProductTableItemProps[];
}

export default function ProductTableBody({
  products,
}: ProductTableBodyProps): JSX.Element {
  const [pageIdx, setPageIdx] = useState(0);
  const [qtdPage, setQdtPages] = useState(products.length / 10);
  const [arrayToRender, setArrayToRender] = useState<ProductTableItemProps[]>(
    []
  );
  // console.log(pageIdx);
  // console.log(qtdPage);

  useEffect(() => {
    const slicedArray = products.slice(0, 10);

    setArrayToRender(slicedArray);
  }, []);

  useEffect(() => {}, [pageIdx]);

  return (
    <tbody>
      {arrayToRender.map(
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
