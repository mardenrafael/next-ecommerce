import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import HorizontalList, {
  HorizontalListProps,
} from "@/components/HorizontalList/HorizontalList";
import NavBar from "@/components/NavBar/NavBar";
import { GetServerSidePropsResult } from "next";

export interface HomeProps extends HorizontalListProps {}

export default function Home({ products }: HomeProps) {
  return (
    <Container>
      <div className="p-8">
        <NavBar />
      </div>

      <HorizontalList products={products} />

      <Footer />
    </Container>
  );
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<HomeProps>
> {
  try {
    return {
      props: {
        products: [
          {
            id: "",
            name: "produto server side",
            image: "https://avatars.githubusercontent.com/u/69557606?v=4",
          },
          {
            id: "",
            name: "Produto server side 2",
            image: "https://avatars.githubusercontent.com/u/69557606?v=4",
          },
          {
            id: "",
            name: "Produto server side 3",
            image: "https://avatars.githubusercontent.com/u/69557606?v=4",
          },
          {
            id: "",
            name: "Produto server side 4",
            image: "https://avatars.githubusercontent.com/u/69557606?v=4",
          },
          {
            id: "",
            name: "Produto server side",
            image: "https://avatars.githubusercontent.com/u/69557606?v=4",
          },
        ],
      },
    };
  } catch (e: unknown) {
    return {
      props: {
        products: [],
      },
    };
  }
}
