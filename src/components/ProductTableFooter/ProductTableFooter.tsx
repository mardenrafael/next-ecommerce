import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Anchor from "../Anchor/Anchor";
import { useContext } from "react";

export default function ProductTableFooter(): JSX.Element {
  const { theme } = useContext(ThemeContext);

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
          1-10
        </span>
        de
        <span
          className={`font-semibold mx-1
          ${theme == ThemeOptions.light ? "text-gray-900" : "text-white"}`}
        >
          1500
        </span>
      </span>
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <Anchor
            href="#"
            className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-l-lg border
            ${
              theme == ThemeOptions.light
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faCaretLeft} className="w-5 h-5" />
          </Anchor>
        </li>
        <li>
          <Anchor
            href="#"
            className={`flex items-center justify-center text-sm py-2 px-3 leading-tight border
            ${
              theme == ThemeOptions.light
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            1
          </Anchor>
        </li>
        <li>
          <Anchor
            href="#"
            className={`flex items-center justify-center text-sm py-2 px-3 leading-tight border
            ${
              theme == ThemeOptions.light
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            2
          </Anchor>
        </li>
        <li>
          <a
            href="#"
            className={`flex items-center justify-center text-sm py-2 px-3 leading-tight border
            ${
              theme == ThemeOptions.light
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            3
          </a>
        </li>
        <li>
          <Anchor
            href="#"
            className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 rounded-r-lg border
            ${
              theme == ThemeOptions.light
                ? "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faCaretRight} className="w-5 h-5" />
          </Anchor>
        </li>
      </ul>
    </nav>
  );
}
