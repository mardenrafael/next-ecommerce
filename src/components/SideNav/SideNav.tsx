import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import {
  faChartLine,
  faMoon,
  faSun,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useContext } from "react";
import LinkList from "../LinkList/LinkList";
import LinkListItem from "../LinkListItem/LinkListItem";
import Switch from "../Switch/Switch";
import Anchor from "../Anchor/Anchor";

export interface SideNavProps {
  logoUrl: string;
}

export default function SideNav({ logoUrl }: SideNavProps): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <aside
      className={`w-64 h-screen border-r ${
        theme == ThemeOptions.light ? "border-r-gray-200" : "border-r-gray-700"
      }`}
    >
      <div className={`justify-center p-4 space-x-4 w-full lg:flex`}>
        <Image
          src={logoUrl}
          alt="logo"
          className="h-8 mr-3"
          width={32}
          height={32}
        />
      </div>
      <div className={`py-5 px-3`}>
        <LinkList>
          <LinkListItem>
            <Anchor
              href="#"
              className={`flex items-center p-2 text-base font-normal rounded-lg ${
                theme == ThemeOptions.light
                  ? "text-gray-900 hover:bg-gray-100 border-gray-200"
                  : "text-white hover:bg-gray-700"
              }`}
            >
              <FontAwesomeIcon
                icon={faChartLine}
                className="w-6 h-6 transition duration-75 text-gray-400"
              />
              <span className="ml-3">Dashboard</span>
            </Anchor>
          </LinkListItem>
        </LinkList>
        <div
          className={`pt-5 mt-5 space-y-2 border-t 
        ${theme == ThemeOptions.light ? "border-gray-200" : "border-gray-700"}`}
        >
          <LinkList>
            <LinkListItem>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal rounded-lg ${
                  theme == ThemeOptions.light
                    ? "text-gray-900 hover:bg-gray-100 border-gray-200"
                    : "text-white hover:bg-gray-700"
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
                  icon={theme == ThemeOptions.light ? faSun : faMoon}
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
