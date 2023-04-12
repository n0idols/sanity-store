import { getProducts, getCategories } from "@/sanity/sanity-utils";
import Image from "next/image";

const HomePage = async () => {
  const products = await getProducts();
  const categories = await getCategories();
  return (
    <div>
      <h1>categories</h1>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
      <h1>products</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>

      {/* {products.map((product) => (
        <div>
          <div>{product.title}</div>
          <a href={product.slug}>{product.slug}</a>
          <div className="w-[400px]">
            <Image
              src={product.mainImage}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              alt={product.title}
            />
          </div>
        </div>
      ))} */}
    </div>
  );
};
export default HomePage;
