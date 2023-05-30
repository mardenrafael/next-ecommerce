export default function Footer(): JSX.Element {
  return (
    <footer className="w-full">
      <section className="flex w-full items-center justify-center gap-4">
        <div className="grid grid-cols-2 divide-x-2">
          <section className="flex items-center justify-end p-4">
            <main>Criado por: Marden Rafael</main>
          </section>
          <section className="flex flex-col items-stretch justify-center h-full p-4">
            <header>
              <h1>Entre em contato com o desenvolvedor</h1>
            </header>
            <main>
              <ul>
                <li>Whats App: (69) 9 8463-6724</li>
                <li>Gmail: mardenrafaeldalmagro.gimenez@gmail.com</li>
                <li>Github: mardenrafael</li>
              </ul>
            </main>
          </section>
        </div>
      </section>
    </footer>
  );
}
