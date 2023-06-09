import BreadScrumbs from "@/components/BreadScrumbs/BreadScrumbs";
import Container from "@/components/Container/Container";
import CreateProductForm from "@/components/CreateProductForm/CreateProductForm";
import Footer from "@/components/Footer/Footer";
import SideNav from "@/components/SideNav/SideNav";
import { ThemeContext } from "@/context/themeContext";
import { faBoxesStacked, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

export default function CreateProduct(): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <main className="flex">
        <Container>
          <SideNav logoUrl="https://flowbite.com/docs/images/logo.svg" />
        </Container>

        <div className="w-full h-screen">
          <div className="h-fit">
            <BreadScrumbs
              scrumbs={[
                {
                  title: "Produtos",
                  icon: faBoxesStacked,
                },
                {
                  title: "Criar produto",
                  icon: faPlus,
                },
              ]}
            />
          </div>

          <CreateProductForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
