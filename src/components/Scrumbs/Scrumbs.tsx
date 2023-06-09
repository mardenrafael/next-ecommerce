import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import Anchor from "../Anchor/Anchor";

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
                ? "text-gray-400 hover:text-primary-300"
                : "text-gray-700 hover:text-primary-700"
            }`}
      >
        {icon ? <FontAwesomeIcon icon={icon} className="w-4 h-4 mr-2" /> : ""}
        {title}
      </Anchor>
    </li>
  );
}
