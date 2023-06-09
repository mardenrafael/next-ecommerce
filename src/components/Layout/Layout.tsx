import { PropsWithChildren } from "react";
import BreadScrumbs from "../BreadScrumbs/BreadScrumbs";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import SideNav from "../SideNav/SideNav";

export interface BodyProps extends PropsWithChildren {}
export interface RootProps extends PropsWithChildren {}

function Root({ children }: RootProps): JSX.Element {
  return (
    <main>
      <section className="flex">
        <Container>
          <SideNav logoUrl="https://flowbite.com/docs/images/logo.svg" />
        </Container>
        <section className="w-full h-screen">
          <nav className="h-fit">
            <Container>
              <BreadScrumbs
                scrumbs={[
                  {
                    title: "teste",
                  },
                  {
                    title: "Teste 2",
                  },
                ]}
              />
            </Container>
          </nav>
          <Container>{children}</Container>
        </section>
      </section>
      <Footer />
    </main>
  );
}

function Body({ children }: BodyProps): JSX.Element {
  return <section>{children}</section>;
}

export const Layout = {
  Root,
  Body,
};
