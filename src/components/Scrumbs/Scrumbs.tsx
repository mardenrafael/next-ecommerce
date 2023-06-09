import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import Anchor from "../Anchor/Anchor";
import { useContext } from "react";
import { IconProp, icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faChartGantt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export interface ScrumbsProps {
  title: string;
  icon?: IconProp;
}

export default function Scrumbs({ title, icon }: ScrumbsProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <li className="inline-flex items-center">
      <Anchor
        href="#"
        className={`inline-flex items-center text-sm font-medium
            ${
              theme == ThemeOptions.light
                ? "text-gray-400 hover:text-primary-600"
                : "text-gray-700 hover:text-white"
            }`}
      >
        {icon ? <FontAwesomeIcon icon={icon} className="w-4 h-4 mr-2" /> : ""}

        {title}
      </Anchor>
    </li>
  );
}
