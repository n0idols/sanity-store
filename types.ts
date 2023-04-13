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
  shortname: string;
  slug: string;
  description: PortableTextBlock[];
  features: PortableTextBlock[];
  desc: PortableTextBlock[];
  feat: PortableTextBlock[];
  includes: string[];
  price: number;
  gallery: string[];
  mainImage?: string;
  mobileImage?: string;
  category: string;
  categorySlug: string;
  relatedProducts: Product[];
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
