import CategoryItem from "@/components/ui/category/item";
import PageHero from "@/components/ui/layout/PageHero";
import { getCategory } from "@/sanity/sanity-utils";

export default async function Earphones() {
  const category = await getCategory("earphones");

  return (
    <>
      <PageHero title={category.title} />
      <section className="container">
        {category.products.map((product) => (
          <CategoryItem key={product._id} product={product} />
        ))}
      </section>
    </>
  );
}
