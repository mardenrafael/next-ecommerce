export default function Header() {
  return (
    <header className="flex flex-col items-center border border-black">
      <section className="border border-black w-full p-4 flex items-center justify-around">
        <nav>Nav bar</nav>
        <nav>Nav bar</nav>
        <nav>Nav bar</nav>
      </section>
      <section className="border border-black w-full p-4 h-40 flex items-center justify-center">
        <h1>Minha loja</h1>
      </section>
    </header>
  );
}
