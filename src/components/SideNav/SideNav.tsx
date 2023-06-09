import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import {
  faChartLine,
  faMoon,
  faSun,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "../Switch/Switch";
import { useContext } from "react";
import LinkList from "../LinkList/LinkList";
import LinkListItem from "../LinkListItem/LinkListItem";
import Image from "next/image";

export interface SideNavProps {
  logoUrl: string;
}

export default function SideNav({ logoUrl }: SideNavProps): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <aside className="w-64 h-screen transition-transform sm:translate-x-0">
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
        <LinkList>
          <LinkListItem>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal rounded-lg ${
                theme == ThemeOptions.light
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-900 hover:bg-gray-100 border-gray-200"
              }`}
            >
              <FontAwesomeIcon
                icon={faChartLine}
                className="w-6 h-6 transition duration-75 text-gray-400"
              />
              <span className="ml-3">Dashboard</span>
            </a>
          </LinkListItem>
        </LinkList>
        <div
          className={`pt-5 mt-5 space-y-2 border-t 
        ${theme == ThemeOptions.light ? "border-gray-700" : "border-gray-200"}`}
        >
          <LinkList>
            <LinkListItem>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal rounded-lg ${
                  theme == ThemeOptions.light
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-900 hover:bg-gray-100 border-gray-200"
                }`}
              >
                <FontAwesomeIcon
                  icon={faWrench}
                  className="w-6 h-6 transition duration-75 text-gray-400"
                />
                <span className="ml-3">Configurações</span>
              </a>
            </LinkListItem>
            <LinkListItem>
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
            </LinkListItem>
          </LinkList>
        </div>
      </div>
    </aside>
  );
}
