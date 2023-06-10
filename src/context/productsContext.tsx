import { ProductTableItemProps } from "@/components/ProductTableItem/ProductTableItem";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export interface ProductsPage {
  products: ProductTableItemProps[];
  offSet: number;
  setOffSet: (offSet: number) => void;
  pageIdx: number;
  setPageIdx: (pageIdx: number) => void;
  currentPage: ProductTableItemProps[];
}

export interface ProductsProviderProps extends PropsWithChildren {
  products: ProductTableItemProps[];
}

export const ProductsContext = createContext<ProductsPage>({
  products: [],
  offSet: 10,
  setOffSet: () => {},
  pageIdx: 0,
  setPageIdx: () => {},
  currentPage: [],
});

export default function ProductsProvider({
  children,
  products,
}: ProductsProviderProps): JSX.Element {
  const [offSet, setOffSet] = useState(10);
  const [pageIdx, setPageIdx] = useState(0);
  const [currentPage, setCurrentPage] = useState<ProductTableItemProps[]>([]);

  useEffect(() => {
    const arrayToRender: ProductTableItemProps[] = products.slice(
      offSet * pageIdx,
      10 + offSet * pageIdx
    );
    setCurrentPage(arrayToRender);
  }, [pageIdx]);

  return (
    <ProductsContext.Provider
      value={{
        products: [],
        offSet,
        setOffSet,
        pageIdx,
        setPageIdx,
        currentPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
