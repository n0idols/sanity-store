import { Product } from "@/types";
import Image from "next/image";

const Related = ({ product }: { product: Product }) => {
  const base = process.env.NEXT_PUBLIC_API_ROUTE;
  const xx99mk1 = {
    name: "XX99 MARK 1",
    image:
      "https://res.cloudinary.com/swdb/image/upload/v1679350329/audiophile/product-xx99-mark-one-headphones/mobile/image-product_qkgqej.jpg",
    url: `http://localhost:3000/headphones/2`,
  };
  const xx99mk2 = {
    name: "XX99 MARK 1I",
    image:
      "https://res.cloudinary.com/swdb/image/upload/v1679350331/audiophile/product-xx99-mark-two-headphones/mobile/image-product_a003gt.jpg",
    url: `http://localhost:3000/headphones/2`,
  };
  const xx59 = {
    name: "XX59",
    image:
      "https://res.cloudinary.com/swdb/image/upload/v1679350328/audiophile/product-xx59-headphones/mobile/image-product_imvuru.jpg",
    url: `http://localhost:3000/headphones/2`,
  };
  const zx7 = {
    name: "ZX7 SPEAKER",
    image:
      "https://res.cloudinary.com/swdb/image/upload/v1679350333/audiophile/product-zx7-speaker/mobile/image-product_hcw5wq.jpg",
    url: `http://localhost:3000/headphones/2`,
  };
  const zx9 = {
    name: "ZX9 SPEAKER",
    image:
      "https://res.cloudinary.com/swdb/image/upload/v1679350334/audiophile/product-zx9-speaker/mobile/image-product_b9quvy.jpg",
    url: `http://localhost:3000/headphones/2`,
  };

  const related1 = [xx99mk1, xx59, zx9];
  const related2 = [xx99mk2, xx59, zx9];
  const related3 = [xx99mk2, xx99mk1, zx9];
  const related4 = [zx7, xx99mk1, xx59];
  const related5 = [zx9, xx99mk1, xx59];
  const related6 = [xx99mk1, xx59, zx9];

  const RelatedItems = ({ related }: any) => {
    return (
      <div className="container mt-32 md:pb-32 pb-12">
        <h2 className="text-4xl text-center uppercase font-semibold mb-8">
          you make also like
        </h2>
        <div className="grid md:grid-cols-3 md:gap-8 gap-y-12">
          {related.map((item: { name: string; image: string; url: string }) => (
            <div key={item.name} className="">
              <div className="bg-greys-two flex flex-col justify-center items-center rounded-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="tracking-widest uppercase font-bold text-2xl my-6">
                  {item.name}
                </h2>
                <a href={item.url} className="btn">
                  see product
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // if (product.id === "1") {
  //   return <RelatedItems related={related1} />;
  // }
  // if (product.id === "2") {
  //   return;
  // }
  // if (product.id === "3") {
  //   return <RelatedItems related={related2} />;
  // }
  // if (product.id === "4") {
  //   return <RelatedItems related={related3} />;
  // }
  // if (product.id === "5") {
  //   return <RelatedItems related={related5} />;
  // }
  // if (product.id === "6") {
  //   return <RelatedItems related={related6} />;
  // }

  return <RelatedItems related={related1} />;
};
export default Related;
