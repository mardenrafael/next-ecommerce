import { ProductTableItemProps } from "@/components/ProductTableItem/ProductTableItem";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export interface ProductsPage {
  products: ProductTableItemProps[];
  offSet: number;
  setOffSet: (offSet: number) => void;
  pageIdx: number;
  setPageIdx: (pageIdx: number) => void;
  currentPage: ProductTableItemProps[];
  itensPerPage: number;
  setItensPerPage: (itens: number) => void;
  pageQtd: number;
  setPageQtd: (pageQtd: number) => void;
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
  itensPerPage: 10,
  setItensPerPage: () => {},
  pageQtd: 0,
  setPageQtd: () => {},
});

export default function ProductsProvider({
  children,
  products,
}: ProductsProviderProps): JSX.Element {
  const [offSet, setOffSet] = useState(10);
  const [pageIdx, setPageIdx] = useState(1);
  const [currentPage, setCurrentPage] = useState<ProductTableItemProps[]>([]);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [pageQtd, setPageQtd] = useState(products.length / itensPerPage);

  useEffect(() => {
    if (pageIdx < 0) {
      setPageIdx(0);
    }

    if (pageIdx >= pageQtd) {
      setPageIdx(pageQtd - 1);
    }

    const arrayToRender: ProductTableItemProps[] = products.slice(
      offSet * pageIdx,
      itensPerPage + offSet * pageIdx
    );

    setCurrentPage(arrayToRender);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        offSet,
        setOffSet,
        pageIdx,
        setPageIdx,
        currentPage,
        itensPerPage,
        setItensPerPage,
        pageQtd,
        setPageQtd,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
