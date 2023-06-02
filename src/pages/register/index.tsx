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

export interface RegisterProps {
  brandName: string;
  logoImageURL: string;
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<RegisterProps>
> {
  return {
    props: {
      brandName: "E commerce",
      logoImageURL:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg",
    },
  };
}

export default function Register({
  brandName,
  logoImageURL,
}: RegisterProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Brand logoImageURL={logoImageURL} brandName={brandName} />
        <div
          className={`w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 
          ${
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
              Crie sua conta
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <Label htmlFor="email">Seu email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="seuemail@gmail.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Sua senha</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirme sua senha</Label>
                <Input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <Label
                    htmlFor="terms"
                    className={`font-light ${
                      theme == ThemeOptions.light
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    Eu aceito os <Anchor href="#">Termos e condições</Anchor>
                  </Label>
                </div>
              </div>
              <button
                type="submit"
                className={`w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700
                ${
                  theme == ThemeOptions.light
                    ? "focus:ring-primary-300"
                    : "focus:ring-primary-800"
                }`}
              >
                Criar conta
              </button>
              <p
                className={`text-sm font-light ${
                  theme == ThemeOptions.light
                    ? "text-gray-500"
                    : "text-gray-400 "
                }`}
              >
                Já tem uma conta?{" "}
                <Link
                  href="/login"
                  className={`font-medium hover:underline ${
                    theme == ThemeOptions.light
                      ? "text-primary-600"
                      : "text-primary-500"
                  }`}
                >
                  Faça seu login aqui
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
