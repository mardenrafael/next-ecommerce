import Anchor from "@/components/Anchor/Anchor";
import Brand from "@/components/Brand/Brand";
import Footer from "@/components/Footer/Footer";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { GetServerSidePropsResult } from "next";
import Link from "next/link";
import { useContext } from "react";

export interface LoginProps {
  brandName: string;
  logoImageURL: string;
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<LoginProps>
> {
  return {
    props: {
      brandName: "E commerce",
      logoImageURL:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg",
    },
  };
}

export default function Login({
  brandName,
  logoImageURL,
}: LoginProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Brand brandName={brandName} logoImageURL={logoImageURL} />
        <div
          className={`w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ${
            theme == ThemeOptions.light
              ? "bg-white"
              : "border bg-gray-800 border-gray-700"
          }`}
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              className={`text-xl font-bold leading-tight tracking-tight md:text-2xl
              ${theme == ThemeOptions.light ? "text-gray-900" : "text-white"}`}
            >
              Entre na sua conta
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <Label htmlFor={"email"}>Seu email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seuemail@gmail.com"
                  required={true}
                />
              </div>
              <div>
                <Label htmlFor="password">Sua senha</Label>
                <Input
                  name="password"
                  id="password"
                  required={true}
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Input required={true} type={"checkbox"} id="remember" />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="remember">Lembrar de mim?</Label>
                  </div>
                </div>
                <Anchor href="#">Esqueceu a senha?</Anchor>
              </div>
              <button
                type="submit"
                className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center
                ${
                  theme == ThemeOptions.light
                    ? "focus:ring-primary-300"
                    : "focus:ring-primary-800"
                }`}
              >
                Entrar
              </button>
              <p
                className={`text-sm font-light
                ${
                  theme == ThemeOptions.light
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                Não tem uma conta ainda?{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Crie uma agora
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </SectionContainer>
  );
}
