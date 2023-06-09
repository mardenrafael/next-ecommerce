import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import SideNav from "@/components/SideNav/SideNav";
import BreadScrumbs from "@/components/BreadScrumbs/BreadScrumbs";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";

export default function Products(): JSX.Element {
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
                title: "Produtos",
                icon: faBoxesStacked,
              },
            ]}
          />
        </div>

        <div className="flex justify-center m-5">
          <button
            id="defaultModalButton"
            data-modal-toggle="defaultModal"
            className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="button"
          >
            Create product
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
