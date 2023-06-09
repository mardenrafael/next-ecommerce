import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

export default function ScrumbSeparator(): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <FontAwesomeIcon
      icon={faCaretRight}
      className={
        theme == ThemeOptions.light ? "text-gray-400" : "text-gray-700"
      }
    />
  );
}
