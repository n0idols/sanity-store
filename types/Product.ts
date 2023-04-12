import { PortableTextBlock } from "sanity";

export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: PortableTextBlock[];
  features: PortableTextBlock[];
  includes: string[];
  price: number;
  gallery: string[];
  mainImage: string;
  category: string;
  categorySlug: string;
}
