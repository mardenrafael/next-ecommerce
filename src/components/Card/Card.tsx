import Image from "next/image";

export default function Card(): JSX.Element {
  return (
    <section className="border flex flex-col items-center p-5">
      <header className="border flex items-center justify-center p-2 w-full">
        <h1>Nome do produto</h1>
      </header>
      <main className="border p-2 m-4">
        <Image src={"/"} alt={"Imagem do protudo"} width={240} height={240} />
      </main>
      <footer className="border w-full flex items-center justify-center p-2">
        <main>info basica</main>
      </footer>
    </section>
  );
}
