import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Input/Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchSection() {
  return (
    <div className="flex items-center justify-center">
      <FontAwesomeIcon icon={faSearch} />
      <section className="w-fit h-16 p-2 flex items-center justify-center">
        <Input
          required={false}
          type="text"
          placeholder="Digite o nome do produto..."
        />
      </section>
    </div>
  );
}
