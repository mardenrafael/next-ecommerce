import Image from "next/image";

export interface ProductCardProps {
  productName: string;
  productImage: string;
}

export default function ProductCard({
  productName,
  productImage,
}: ProductCardProps): JSX.Element {
  return (
    <section className="flex flex-col items-center p-5">
      <header className="flex items-center justify-center p-2 w-full">
        <h1>{productName}</h1>
      </header>
      <main className="p-2 m-4">
        <Image
          src={productImage}
          alt={"Imagem do protudo"}
          width={240}
          height={240}
        />
      </main>
      <footer className="w-full flex items-center justify-center p-2">
        <main>
          <button>Mais informações</button>
        </main>
      </footer>
    </section>
  );
}
