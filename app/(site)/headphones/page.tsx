import { getCategory } from "@/sanity/sanity-utils";

export default async function Headphones({ params }: any) {
  const category = await getCategory("headphones");

  return <pre>{JSON.stringify(category, null, 2)}</pre>;
}
