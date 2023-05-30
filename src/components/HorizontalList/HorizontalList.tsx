import Card from "../Card/Card";

export default function HorizontalList(): JSX.Element {
  return (
    <section className="border p-4">
      <header className="border p-2 font-bold text-4xl">
        <h1>Destaques</h1>
      </header>
      <main className="grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </section>
  );
}
