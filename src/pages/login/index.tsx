import Anchor from "@/components/Anchor/Anchor";
import Footer from "@/components/Footer/Footer";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";
import { GetServerSidePropsResult } from "next";
import Image from "next/image";

export interface LoginProps {
  eCommerceName: string;
  logoImage: string;
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<LoginProps>
> {
  return {
    props: {
      eCommerceName: "E commerce",
      logoImage:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg",
    },
  };
}

export default function Login({
  eCommerceName,
  logoImage,
}: LoginProps): JSX.Element {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Anchor
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="mr-2"
            src={logoImage}
            alt="logo"
            width={32}
            height={32}
          />
          {eCommerceName}
        </Anchor>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
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
                    <Label htmlFor="remeber">Lembrar de mim?</Label>
                  </div>
                </div>
                <Anchor href="#" className="text-sm" extend={true}>
                  Esqueceu a senha?
                </Anchor>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Entrar
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Não tem uma conta ainda?{" "}
                <Anchor href="#">Crie uma agora</Anchor>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
