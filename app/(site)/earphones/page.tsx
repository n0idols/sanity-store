import { getCategory } from "@/sanity/sanity-utils";

export default async function Earphones() {
  const earphones = await getCategory("earphones");

  return <pre>{JSON.stringify(earphones, null, 2)}</pre>;
}
