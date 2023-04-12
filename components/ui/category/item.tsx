import { Product } from "@/types";
import Image from "next/image";

const CategoryItem = ({ product }: { product: Product }) => {
  function isEven(n: string) {
    const thenumber = Number(n);
    return thenumber % 2 == 0;
  }
  return (
    <div className="grid lg:grid-cols-2 my-32" key={product.id}>
      <div className={isEven(product.id) ? `lg:order-last` : ``}>
        <Image
          src={product.image || "/placeholder.jpg"}
          alt={product.name}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
        {/* {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        ) : (
          <Skeleton height={400} />
        )} */}
      </div>

      <div
        className={
          isEven(product.id) ? `product-info lg:mr-20` : `product-info lg:ml-20`
        }
      >
        <h2 className="text-4xl font-semibold uppercase">{product.name}</h2>
        <p className="pb-4 text-gray-600">{product.desc}</p>
        <div>
          <a href={`/headphones/${product.id}`} className="btn">
            view product
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
