import NavBar from "../NavBar/NavBar";

export interface HeaderProps {
  title: String;
}

export default function Header({ title }: HeaderProps): JSX.Element {
  return (
    <header className="flex flex-col items-center">
      <section className="w-full p-4 h-40 flex items-center justify-center">
        <h1>{title}</h1>
      </section>
    </header>
  );
}
