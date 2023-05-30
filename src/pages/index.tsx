import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HorizontalList from "@/components/HorizontalList/HorizontalList";
import SearchSection from "@/components/SearchSection/SearchSection";

export default function Home() {
  return (
    <main className="bg-white">
      <Header title={"E commerce"} />
      <SearchSection />
      <HorizontalList />
      <Footer />
    </main>
  );
}
