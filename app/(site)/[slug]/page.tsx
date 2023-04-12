import { getProduct } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { product: string };
};

export default async function Product({ params }: any) {
  const slug = params.slug;
  const product = await getProduct(slug);

  return <pre>{JSON.stringify(product, null, 2)}</pre>;
}
