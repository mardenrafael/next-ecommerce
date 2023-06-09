import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "../Switch/Switch";
import { useContext } from "react";
import ButtonList from "../ButtonList/ButtonList";
import ButtonListItem from "../ButtonListItem/ButtonListItem";
import Image from "next/image";

export interface SideNavProps {
  logoUrl: string;
}

export default function SideNav({ logoUrl }: SideNavProps): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0">
      <div
        className={`justify-center p-4 space-x-4 w-full lg:flex z-20 border-r
        ${
          theme == ThemeOptions.light
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <Image
          src={logoUrl}
          alt="logo"
          className="h-8 mr-3"
          width={32}
          height={32}
        />
      </div>
      <div
        className={`overflow-y-auto py-5 px-3 h-full border-r  ${
          theme == ThemeOptions.light
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <ButtonList>
          <ButtonListItem>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal rounded-lg ${
                theme == ThemeOptions.light
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-900 hover:bg-gray-100 border-gray-200"
              }`}
            >
              <svg
                className={`w-6 h-6 transition duration-75 text-gray-400`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </a>
          </ButtonListItem>
        </ButtonList>
        <div
          className={`pt-5 mt-5 space-y-2 border-t 
        ${theme == ThemeOptions.light ? "border-gray-700" : "border-gray-200"}`}
        >
          <ButtonList>
            <ButtonListItem>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal rounded-lg ${
                  theme == ThemeOptions.light
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-900 hover:bg-gray-100 border-gray-200"
                }`}
              >
                <svg
                  className={`w-6 h-6 transition duration-75 text-gray-400`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3">Configurações</span>
              </a>
            </ButtonListItem>
            <ButtonListItem>
              <div className="flex items-center p-2">
                <FontAwesomeIcon
                  icon={theme == ThemeOptions.light ? faMoon : faSun}
                  className={`w-6 h-6 text-gray-400`}
                />
                <Switch
                  initialValue={!(theme == ThemeOptions.light)}
                  onSwitch={toggleTheme}
                />
              </div>
            </ButtonListItem>
          </ButtonList>
        </div>
      </div>
    </aside>
  );
}
