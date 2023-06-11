import { Layout } from "@/components/Layout/Layout";
import ProductTable from "@/components/ProductTable/ProductTable";
import ProductTableFooter from "@/components/ProductTableFooter/ProductTableFooter";
import { ProductTableItemProps } from "@/components/ProductTableItem/ProductTableItem";
import ProductTableNav from "@/components/ProductTableNav/ProductTableNav";
import ProductTableSet from "@/components/ProductTableSet/ProductTableSet";
import ProductsProvider from "@/context/productsContext";
import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import PrismaConnector from "@/database/connector/PrismaConnector";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { GetServerSidePropsResult } from "next";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import notFound from "../../../../public/not-found.svg";
import NotFoundProducts from "@/components/NotFoundProducts/NotFoundProducts";

export interface ProductsProps {
  products: ProductTableItemProps[];
}

export default function Products({ products }: ProductsProps): JSX.Element {
  const [hasProducts, setHasProducts] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setHasProducts(true);
    }
  });

  return (
    <Layout.Root
      scrumbs={[
        {
          title: "Produtos",
          icon: faBoxesStacked,
        },
      ]}
    >
      <Layout.Body>
        <ProductsProvider products={products}>
          {hasProducts ? (
            <ProductTable>
              <ProductTableNav />
              <ProductTableSet />
              <ProductTableFooter />
            </ProductTable>
          ) : (
            <NotFoundProducts />
          )}
        </ProductsProvider>
      </Layout.Body>
    </Layout.Root>
  );
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<ProductsProps>
> {
  try {
    const connector = PrismaConnector.getInstance();
    const prisma = connector.getPrisma();

    const products = await prisma.product.findMany({
      where: {
        userId: "82add09d-be46-4471-bd2f-1d151bc09193",
      },
    });

    const parsedProducts: ProductTableItemProps[] = products.map((product) => {
      return {
        productPrice: product.price,
        productName: product.name,
        productDescription: product.name,
      };
    });
    return {
      props: {
        products: parsedProducts,
      },
    };
  } catch (error: unknown) {
    console.log("error");

    return {
      props: {
        products: [],
      },
    };
  }
}
