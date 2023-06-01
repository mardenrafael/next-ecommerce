import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HorizontalList, {
  HorizontalListProps,
} from "@/components/HorizontalList/HorizontalList";
import NavBar from "@/components/NavBar/NavBar";
import SearchSection from "@/components/SearchSection/SearchSection";
import { GetServerSidePropsResult } from "next";

export interface HomeProps extends HorizontalListProps {}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<HorizontalListProps>
> {
  return {
    props: {
      products: [
        {
          productName: "produto server side",
          productImage: "/",
        },
      ],
    },
  };
}

export default function Home({ products }: HomeProps) {
  return (
    <main className="bg-white">
      <NavBar />
      <Header title={"E commerce"} />
      <SearchSection />
      <HorizontalList products={products} />
      <Footer />
    </main>
  );
}
