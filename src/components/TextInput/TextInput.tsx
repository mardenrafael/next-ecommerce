import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface TextInputProps {
  icon?: IconProp;
  iconColor?: string;
}

export default function TextInput({ icon, iconColor }: TextInputProps) {
  return (
    <main className="border border-black rounded p-1">
      {icon ? <FontAwesomeIcon icon={icon} color={iconColor} /> : ""}
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Digite o nome do produto..."
        className="ml-4"
      />
    </main>
  );
}
