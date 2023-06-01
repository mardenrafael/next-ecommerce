import Image from "next/image";
import applewatch from "../../../public/img/apple-watch.png";
import Anchor from "../Anchor/Anchor";

export interface ProductCardProps {
  productName: string;
  productImageUrl: string;
}

export default function ProductCard({
  productName,
  productImageUrl,
}: ProductCardProps): JSX.Element {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Anchor href="#" blankStyle>
        <Image
          className="p-8 rounded-t-lg"
          src={productImageUrl}
          alt="product image"
          width={500}
          height={500}
        />
      </Anchor>
      <div className="px-5 pb-5 flex flex-col gap-5">
        <div className="flex items-center justify-center">
          <Anchor href="#" blankStyle>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {productName}
            </h5>
          </Anchor>
        </div>
        <div className="flex items-center justify-center">
          <Anchor
            href="#"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Ver mais informações
          </Anchor>
        </div>
      </div>
    </div>
  );
}
