import { Layout } from "@/components/Layout/Layout";
import ProductTable from "@/components/ProductTable/ProductTable";
import ProductTableFooter from "@/components/ProductTableFooter/ProductTableFooter";
import { ProductTableItemProps } from "@/components/ProductTableItem/ProductTableItem";
import ProductTableNav from "@/components/ProductTableNav/ProductTableNav";
import ProductTableSet from "@/components/ProductTableSet/ProductTableSet";
import ProductsProvider from "@/context/productsContext";
import PrismaConnector from "@/database/connector/PrismaConnector";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { GetServerSidePropsResult } from "next";

export interface ProductsProps {
  products: ProductTableItemProps[];
}

export default function Products({ products }: ProductsProps): JSX.Element {
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
          <ProductTable>
            <ProductTableNav />
            <ProductTableSet />
            <ProductTableFooter />
          </ProductTable>
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
        userId: "53483084-e27f-484c-b80d-65082a0336de",
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
