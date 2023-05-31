import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full p-4 flex items-center justify-between">
      <section className="flex items-center justify-center">
        <Image alt="Logo da sua loja" src={"/"} width={96} height={96} />
      </section>
      <section className="min-w-fit w-96 max-w-xs h-full p-1 flex gap-2 justify-evenly">
        <div>
          <button>Inicio</button>
        </div>
        <div>
          <button>Contato</button>
        </div>
      </section>
    </nav>
  );
}
