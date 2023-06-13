import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Container from "../Container/Container";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { toast } from "react-toastify";

export interface FormFields {
  productName: string;
  productPrice: number;
  productDescription: string;
}

export default function CreateProductForm(): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const [formFields, setFormFields] = useState<FormFields>({
    productDescription: "",
    productName: "",
    productPrice: 0,
  });

  function handleFormChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    e.preventDefault();

    setFormFields((prevState) => {
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

    if (formFields.productName.replaceAll(" ", "") == "") {
      toast("O nome do produto não pode ser vazio", {
        type: "warning",
        autoClose: 2500,
        theme: theme == ThemeOptions.light ? "light" : "dark",
      });
    }

    if (formFields.productDescription.replaceAll(" ", "") == "") {
      toast("A descrição do produto não pode ser vazio", {
        type: "warning",
        autoClose: 2500,
        theme: theme == ThemeOptions.light ? "light" : "dark",
      });
    }
    if (formFields.productPrice <= 0) {
      toast("O valor do produto deve ser maior 0", {
        type: "warning",
        autoClose: 2500,
        theme: theme == ThemeOptions.light ? "light" : "dark",
      });
    }

    try {
      const result = await fetch(
        "/api/product/create?userId=fe97253c-ecdd-4232-b268-d12cc8d32506",
        {
          method: "POST",
          body: JSON.stringify({
            productName: formFields.productName,
            productDescription: formFields.productDescription,
            productPrice: formFields.productPrice,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await result.json();

      if (!result.ok) {
        throw new Error(json.error);
      }

      toast("Operação realizada com sucesso", {
        autoClose: 2500,
        type: "success",
        theme,
      });
    } catch (error) {
      console.log(error);

      toast("Ops, algo deu errado", {
        autoClose: 2500,
        type: "error",
        theme,
      });
    }
  }

  return (
    <Container>
      <div className="flex items-center justify-center h-screen ">
        <form onSubmit={handleFormSubmit}>
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div>
              <Label
                htmlFor="productName"
                className={`block mb-2 text-sm font-medium
                    ${
                      theme == ThemeOptions.light
                        ? "text-gray-900"
                        : "text-white"
                    }`}
              >
                Nome do produto:
              </Label>
              <Input
                id="productName"
                name="productName"
                placeholder="Nome do produto"
                type="text"
                onChange={handleFormChange}
                required
                className={` border text-sm rounded-lg block w-full p-2.5 
                ${
                  theme == ThemeOptions.light
                    ? "bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 "
                    : "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                }`}
              />
            </div>
            <div>
              <Label
                htmlFor="productPrice"
                className={`block mb-2 text-sm font-medium
                    ${
                      theme == ThemeOptions.light
                        ? "text-gray-900"
                        : "text-white"
                    }`}
              >
                Valor do produto:
              </Label>
              <Input
                id="productPrice"
                name="productPrice"
                placeholder="R$150,99"
                type="number"
                onChange={handleFormChange}
                required
                className={` border text-sm rounded-lg block w-full p-2.5 
                ${
                  theme == ThemeOptions.light
                    ? "bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 "
                    : "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                }`}
              />
            </div>
            <div className="sm:col-span-2">
              <Label
                htmlFor="productDescription"
                className={`block mb-2 text-sm font-medium
                    ${
                      theme == ThemeOptions.light
                        ? "text-gray-900"
                        : "text-white"
                    }`}
              >
                Descrição do produto:
              </Label>
              <textarea
                name="productDescription"
                rows={4}
                className={` border block p-2.5 w-full text-sm rounded-lg
                ${
                  theme == ThemeOptions.light
                    ? "bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 "
                    : "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                }`}
                placeholder="Descrição breve do produto"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-1 -ml-1 w-4 h-4" />
            Adicionar
          </button>
        </form>
      </div>
    </Container>
  );
}
