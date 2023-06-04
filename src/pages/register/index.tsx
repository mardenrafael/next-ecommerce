import Anchor from "@/components/Anchor/Anchor";
import Brand from "@/components/Brand/Brand";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";
import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { GetServerSidePropsResult } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";

export interface RegisterProps {
  brandName: string;
  logoImageURL: string;
}

export interface RegisterFormFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export default function Register({
  brandName,
  logoImageURL,
}: RegisterProps): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const { push } = useRouter();
  const [formFields, setFormFields] = useState<RegisterFormFields>({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [isLoading, setIsloading] = useState<boolean>(false);

  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    setFormFields((prevState) => {
      if (e.target.type === "checkbox") {
        return {
          ...prevState,
          terms: e.target.checked,
        };
      }
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleFormSubmit(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    if (formFields.password != formFields.confirmPassword) {
      toast("As senhas não conferem", {
        autoClose: 2500,
        type: "error",
        theme: theme == ThemeOptions.light ? "light" : "dark",
      });
      return;
    }

    if (formFields.password.length < 8) {
      toast("A senha tem que ter no minimo 8 caracteres", {
        autoClose: 2500,
        type: "error",
        theme: theme == ThemeOptions.light ? "light" : "dark",
      });
      return;
    }

    if (!formFields.terms) {
      toast("Voçe precisa aceitar os termos e condições", {
        autoClose: 2500,
        type: "error",
        theme: theme == ThemeOptions.light ? "light" : "dark",
      });
      return;
    }

    try {
      setIsloading(true);
      const response = await fetch("/api/auth/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: formFields.name,
          email: formFields.email,
          password: formFields.password,
          terms: formFields.terms,
        }),
      });
      const json = await response.json();

      if (response.status != 200) {
        throw new Error();
      }

      toast(json.message, {
        type: "success",
        theme: theme == ThemeOptions.light ? "light" : "dark",
        autoClose: 2500,
      });
      push("/");
    } catch (error: unknown) {
      toast("Ops, algo de errado aconteceu :(", {
        type: "error",
        theme: theme == ThemeOptions.light ? "light" : "dark",
        autoClose: 2500,
      });
    } finally {
      setIsloading(false);
    }
  }

  return (
    <Container>
      <div className="pt-8">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Brand logoImageURL={logoImageURL} brandName={brandName} />
          {isLoading ? (
            "Loading..."
          ) : (
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
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleFormSubmit}
                >
                  <div>
                    <Label htmlFor="name">Seu nome</Label>
                    <Input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Seu nome"
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Seu email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="seuemail@gmail.com"
                      onChange={handleInput}
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
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirme sua senha</Label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="••••••••"
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        name="terms"
                        onChange={handleInput}
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
                        Eu aceito os{" "}
                        <Anchor href="#">Termos e condições</Anchor>
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
          )}
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </Container>
  );
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
