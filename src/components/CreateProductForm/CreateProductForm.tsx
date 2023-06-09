import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Label from "../Label/Label";
import Container from "../Container/Container";
import Input from "../Input/Input";
import { useContext } from "react";

export default function CreateProductForm(): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <div className="p-4">
        <form action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
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
                onChange={() => {}}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                Price
              </Label>
              <Input
                id="productPrice"
                name="productPrice"
                placeholder="R$150,99"
                type="number"
                onChange={() => {}}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                id="productDescription"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Descrição breve do produto"
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
