import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Product } from "@/types/Product";
import { Category } from "@/types/Category";

export async function getProducts(): Promise<Product[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"]{
        _id,
        title,
        "slug": slug.current,
        categories,
        description,
        price,
        gallery,
        "mainImage": mainImage.asset->url,
    }`
  );
}

export async function getProduct(slug: string): Promise<Product> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        description,
        price,
        gallery,
        includes,
        "mainImage": mainImage.asset->url,
        "category": category->title,
        "categorySlug": category->slug
      }`,
    { slug }
  );
}

export async function getCategories(): Promise<Category[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category"]{
            _id,
            title,
            "slug": slug.current,
            "products": *[_type == "product" && references(^._id)]{
                _id,
                title,
                "slug": slug.current,
                "mainImage": mainImage.asset->url,
                "price": price
            }
        }`
  );
}

export async function getCategory(slug: string): Promise<Category> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category" && slug.current == $slug][0]{
                _id,
                title,
                "slug": slug.current,
                "products": *[_type == "product" && references(^._id)]{
                    _id,
                    title,
                    "slug": slug.current,
                    "mainImage": mainImage.asset->url,
                    "price": price
                }
            }`,
    { slug }
  );
}
