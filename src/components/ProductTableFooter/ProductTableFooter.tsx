import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Anchor from "../Anchor/Anchor";
import { useContext } from "react";
import { ProductsContext } from "@/context/productsContext";

export default function ProductTableFooter(): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const { products, offSet, pageIdx, setPageIdx } = useContext(ProductsContext);

  return (
    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
      <span
        className={`text-sm font-normal
        ${theme == ThemeOptions.light ? "text-gray-500" : "text-gray-400"}`}
      >
        Exibindo
        <span
          className={`font-semibold mx-1
          ${theme == ThemeOptions.light ? "text-gray-900" : "text-white"}`}
        >
          {pageIdx * offSet}-{10 + offSet * pageIdx}
        </span>
        de
        <span
          className={`font-semibold mx-1
          ${theme == ThemeOptions.light ? "text-gray-900" : "text-white"}`}
        >
          {products.length}
        </span>
      </span>
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <button
            className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-l-lg border
            ${
              theme == ThemeOptions.light
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => {
              setPageIdx(pageIdx - 1);
            }}
          >
            <FontAwesomeIcon icon={faCaretLeft} className="w-5 h-5" />
          </button>
        </li>
        <li>
          <button
            className={`flex items-center justify-center text-sm py-2 px-3 leading-tight border
            ${
              theme == ThemeOptions.light
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => {
              setPageIdx(0);
            }}
          >
            0
          </button>
        </li>
        <li>
          <button
            className={`flex items-center justify-center text-sm py-2 px-3 leading-tight border
            ${
              theme == ThemeOptions.light
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => {
              setPageIdx(1);
            }}
          >
            1
          </button>
        </li>
        <li>
          <button
            className={`flex items-center justify-center text-sm py-2 px-3 leading-tight border
            ${
              theme == ThemeOptions.light
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => {
              setPageIdx(2);
            }}
          >
            2
          </button>
        </li>
        <li>
          <button
            className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-r-lg border
            ${
              theme == ThemeOptions.light
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => {
              setPageIdx(pageIdx + 1);
            }}
          >
            <FontAwesomeIcon icon={faCaretRight} className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
