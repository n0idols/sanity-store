import { Product } from "./Product";

export interface Category {
  _id: string;
  title: string;
  slug: string;
  products: Product[];
}
