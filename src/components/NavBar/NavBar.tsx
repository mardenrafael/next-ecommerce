import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="border border-black w-full p-4 flex items-center justify-between">
      <section className="border border-black flex items-center justify-center">
        <Image alt="Logo da sua loja" src={"/"} width={96} height={96} />
      </section>
      <section className="border border-black min-w-fit w-96 max-w-xs h-full p-1 flex gap-2 justify-evenly">
        <div>Início</div>
        <div>Contato</div>
      </section>
    </nav>
  );
}
