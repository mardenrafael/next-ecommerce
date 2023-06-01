import Anchor from "@/components/Anchor/Anchor";
import Footer from "@/components/Footer/Footer";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";
import Image from "next/image";

export default function Register(): JSX.Element {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Anchor
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          E commerce
        </Anchor>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
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
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <Label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    Eu aceito os{" "}
                    <Anchor
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Termos e condições
                    </Anchor>
                  </Label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Criar conta
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Já tem uma conta? <Anchor href="#">Faça seu login aqui</Anchor>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
