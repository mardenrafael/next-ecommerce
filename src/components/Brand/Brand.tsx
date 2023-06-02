import { ThemeContext, ThemeOptions } from "@/context/themeContext";
import { useContext } from "react";
import Image from "next/image";
import Anchor from "../Anchor/Anchor";

export interface BrandProps {
  logoImageURL: string;
  brandName: string;
}

export default function Brand({
  brandName,
  logoImageURL,
}: BrandProps): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <Anchor
      href="/"
      className={`flex items-center mb-6 text-2xl font-semibold ${
        theme == ThemeOptions.light ? "text-gray-900" : "text-white"
      }`}
    >
      <Image
        className="mr-2"
        src={logoImageURL}
        alt="logo"
        width={32}
        height={32}
      />
      {brandName}
    </Anchor>
  );
}
