import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Label from "../Label/Label";
import {
  faCaretDown,
  faFilter,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import Input from "../Input/Input";
import { useContext } from "react";
import Link from "next/link";

export default function ProductTableNav(): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <div className="w-full md:w-1/2">
        <form className="flex items-center">
          <Label htmlFor="simple-search" className="sr-only">
            Pesquisar...
          </Label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={`w-5 h-5
                  ${
                    theme == ThemeOptions.light
                      ? "text-gray-500"
                      : "text-gray-400"
                  }
                `}
              />
            </div>
            <Input
              type="text"
              className={` text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 
              ${
                theme == ThemeOptions.light
                  ? "bg-gray-50 border border-gray-300 text-gray-900"
                  : "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              }`}
              placeholder="Search"
              required
              onChange={() => {}}
            />
          </div>
        </form>
      </div>
      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        <Link
          type="button"
          className={`flex items-center justify-center focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none text-white
          ${
            theme == ThemeOptions.light
              ? "bg-primary-700 hover:bg-primary-800 "
              : "bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
          }`}
          href="/admin/products/createProduct"
        >
          <FontAwesomeIcon icon={faPlus} className="h-3.5 w-3.5 mr-2" />
          Adicionar produto
        </Link>
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <button
            className={`w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4
            ${
              theme == ThemeOptions.light
                ? "text-gray-900 bg-white border-gray-200 hover:bg-gray-100 focus:ring-gray-200 hover:text-primary-700"
                : "focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
            }`}
            type="button"
          >
            <FontAwesomeIcon
              icon={faFilter}
              className={`h-4 w-4 mr-2
              ${
                theme == ThemeOptions.light ? "text-gray-900" : "text-gray-400"
              }`}
            />
            Filtrar
            <FontAwesomeIcon
              icon={faCaretDown}
              className={`-mr-1 ml-1.5 w-5 h-5
              ${
                theme == ThemeOptions.light ? "text-gray-900" : "text-gray-400"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
