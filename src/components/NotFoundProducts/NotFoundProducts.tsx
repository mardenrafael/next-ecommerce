import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import notFound from "../../../public/not-found.svg";

export default function NotFoundProducts(): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="p-3 ">
      <div
        className={`shadow-md sm:rounded-lg
${theme == ThemeOptions.light ? "bg-white" : "bg-gray-800"}`}
      >
        <div className="justify-center items-center w-full h-full">
          <div
            className={`p-4 text-center rounded-lg shadow flex flex-col items-center justify-center
          ${theme == ThemeOptions.light ? "bg-white" : "bg-gray-800"}
          `}
          >
            <p
              className={`mb-4 text-lg font-semibold
            ${theme == ThemeOptions.light ? "text-gray-900" : "text-white"}`}
            >
              Parece que você não tem nenhum produto ainda.
            </p>
            <Image src={notFound} alt={""} width={512} />
            <Link
              href="/admin/products/createProduct"
              className="p-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Cadastrar produto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
