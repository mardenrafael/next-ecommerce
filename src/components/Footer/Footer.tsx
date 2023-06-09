import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { useContext } from "react";
import Anchor from "../Anchor/Anchor";
import Container from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer(): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <footer
        className={`shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8`}
      >
        <p
          className={`mb-4 text-sm text-center sm:mb-0 ${
            theme == ThemeOptions.light ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Fale com o desenvolvedor{" "}
          <Anchor
            href="https://github.com/mardenrafael"
            className="hover:underline"
            target="_blank"
          >
            Marden Rafael
          </Anchor>
        </p>
        <div className="flex justify-center items-center space-x-1">
          <Anchor
            href="#"
            className={`inline-flex justify-center p-2 rounded-lg cursor-pointer ${
              theme == ThemeOptions.light
                ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                : "text-gray-400 hover:text-white hover:bg-gray-600"
            }`}
          >
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
          </Anchor>
          <Anchor
            href="#"
            className={`inline-flex justify-center p-2 rounded-lg cursor-pointer ${
              theme == ThemeOptions.light
                ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                : "text-gray-400 hover:text-white hover:bg-gray-600"
            }`}
          >
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </Anchor>
        </div>
      </footer>
    </Container>
  );
}
