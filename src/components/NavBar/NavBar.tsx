import Image from "next/image";
import Anchor from "../Anchor/Anchor";
import SearchSection from "../SearchSection/SearchSection";
import { useContext } from "react";
import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import Switch from "../Switch/Switch";

export default function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeSwitch(): void {
    theme == ThemeOptions.light
      ? setTheme(ThemeOptions.dark)
      : setTheme(ThemeOptions.light);
  }
  return (
    <nav className={theme == ThemeOptions.light ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Anchor href="https://flowbite.com/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            alt="logo"
            className="h-8 mr-3"
            width={32}
            height={32}
          />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              theme == ThemeOptions.light ? "text-black" : "text-white"
            }`}
          >
            Flowbite
          </span>
        </Anchor>
        <div>
          <SearchSection />
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 border ${
              theme == ThemeOptions.light
                ? "border-gray-100 bg-gray-50 md:bg-white"
                : "bg-gray-800 md:bg-gray-900 border-gray-700"
            }  `}
          >
            <li>
              <Switch
                title={
                  theme == ThemeOptions.light
                    ? "Ativar dark mode"
                    : "Ativar light mode"
                }
                onSwitch={handleThemeSwitch}
              />
            </li>
            <li>
              <Anchor
                href={"#"}
                className={`block py-2 pl-3 pr-4 md:p-0 bg-primary-700 rounded md:bg-transparent md:text-primary-700 ${
                  theme == ThemeOptions.light
                    ? "text-gray-900"
                    : "text-white md:text-primary-500"
                }`}
              >
                Inicio
              </Anchor>
            </li>
            <li>
              <Anchor
                href="#"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 ${
                  theme == ThemeOptions.light
                    ? "text-gray-900"
                    : "text-white md:hover:text-primary-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                }`}
              >
                Produtos
              </Anchor>
            </li>
            <li>
              <Anchor
                href="#"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 ${
                  theme == ThemeOptions.light
                    ? "text-gray-900"
                    : "text-white md:hover:text-primary-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                }`}
              >
                Contato
              </Anchor>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
