import TextInput from "../TextInput/TextInput";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchSection() {
  return (
    <section className="border border-black w-full h-16 p-2 flex items-center justify-center">
      <TextInput icon={faSearch} />
    </section>
  );
}
