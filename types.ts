import { PortableTextBlock } from "sanity";

export interface Category {
  _id: string;
  title: string;
  slug: string;
  products: Product[];
}

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

export interface BoxItem {
  name: string;
  qty: number;
}

export type Params = {
  params: {
    id: string;
  };
};
