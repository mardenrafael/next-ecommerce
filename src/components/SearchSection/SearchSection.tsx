import Input from "../Input/Input";

export default function SearchSection() {
  return (
    <div className="flex items-center justify-center">
      <section className="w-fit h-16 p-2">
        <form action="/">
          <Input
            required={false}
            type="text"
            placeholder="Digite o nome do produto..."
          />
        </form>
      </section>
    </div>
  );
}
