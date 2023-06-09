import BreadScrumbs from "@/components/BreadScrumbs/BreadScrumbs";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import SideNav from "@/components/SideNav/SideNav";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard(): JSX.Element {
  return (
    <>
      <main className="flex">
        <Container>
          <SideNav logoUrl="https://flowbite.com/docs/images/logo.svg" />
        </Container>

        <div className="h-fit">
          <BreadScrumbs
            scrumbs={[
              {
                title: "Dashboard",
                icon: faChartLine,
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
