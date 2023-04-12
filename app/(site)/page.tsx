import Hero from "@/components/ui/layout/Hero";
import CategoryList from "@/components/ui/category/list";
import Featured from "@/components/ui/product/Featured";
import Info from "@/components/ui/layout/Info";

export default async function page() {
  return (
    <>
      <Hero />
      <CategoryList />
      <Featured />
      <Info />
    </>
  );
}
