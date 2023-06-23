import { Layout } from "@/components/Layout/Layout";
import NotFoundProducts from "@/components/NotFoundProducts/NotFoundProducts";
import ProductTable from "@/components/ProductTable/ProductTable";
import ProductTableFooter from "@/components/ProductTableFooter/ProductTableFooter";
import { ProductTableItemProps } from "@/components/ProductTableItem/ProductTableItem";
import ProductTableNav from "@/components/ProductTableNav/ProductTableNav";
import ProductTableSet from "@/components/ProductTableSet/ProductTableSet";
import ProductsProvider from "@/context/productsContext";
import PrismaConnector from "@/database/connector/PrismaConnector";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { GetServerSidePropsResult } from "next";
import { useEffect, useState } from "react";

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
        userId: "092b95db-2ac4-4341-8345-b0fc4ab0a5ef",
      },
    });

    const parsedProducts: ProductTableItemProps[] = products.map(product => {
      return {
        productPrice: product.price,
        productName: product.name,
        productDescription: product.description ? product.description : "",
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
