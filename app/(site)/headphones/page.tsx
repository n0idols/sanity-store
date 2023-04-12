import PageHero from "@/components/ui/layout/PageHero";
import CategoryItem from "@/components/ui/category/item";
import { getCategory } from "@/sanity/sanity-utils";

export default async function Headphones() {
  const category = await getCategory("headphones");

  return (
    <>
      <PageHero title={category.title} />
      <section className="container">
        {category.products.map((product) => (
          <CategoryItem key={product._id} product={product} />
        ))}
        {/* {products.map((product: Product) => (
          <CategoryItem key={product.id} product={product} />
        ))} */}
      </section>
    </>
  );
}
