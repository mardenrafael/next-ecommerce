import Header from "@/components/Header/Header";
import SearchSection from "@/components/SearchSection/SearchSection";

export default function Home() {
  return (
    <main className="bg-white">
      <Header title={"E commerce"} />
      <SearchSection />
    </main>
  );
}
