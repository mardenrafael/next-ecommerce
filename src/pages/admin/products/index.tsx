import { Layout } from "@/components/Layout/Layout";
import ProductTable from "@/components/ProductTable/ProductTable";
import ProductTableFooter from "@/components/ProductTableFooter/ProductTableFooter";
import { ProductTableItemProps } from "@/components/ProductTableItem/ProductTableItem";
import ProductTableNav from "@/components/ProductTableNav/ProductTableNav";
import ProductTableSet from "@/components/ProductTableSet/ProductTableSet";
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
        <ProductTable>
          <ProductTableNav />
          <ProductTableSet products={products} />
          <ProductTableFooter />
        </ProductTable>
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
        userId: "095c433d-d3ae-4d54-b906-a755b273840a",
      },
    });

    const parsedProducts: ProductTableItemProps[] = products.map((product) => {
      return {
        productPrice: product.price,
        productName: product.name,
        productDescription: product.name,
      };
    });
    console.log(products);

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
