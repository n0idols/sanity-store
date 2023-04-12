import { Product } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const CategoryItem = ({ product }: { product: Product }) => {
  function isEven(n: string) {
    const thenumber = Number(n);
    return thenumber % 2 == 0;
  }
  return (
    <div className="grid lg:grid-cols-2 my-32" key={product._id}>
      <div className={isEven(product._id) ? `lg:order-last` : ``}>
        <Image
          src={product.mainImage || "/placeholder.jpg"}
          alt={product.title}
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
          isEven(product._id)
            ? `product-info lg:mr-20`
            : `product-info lg:ml-20`
        }
      >
        <h2 className="text-4xl font-semibold uppercase">{product.title}</h2>

        <div className="pb-4 text-gray-600">
          <PortableText value={product.description} />
        </div>
        <div>
          <a href={`/${product.slug}`} className="btn">
            view product
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
