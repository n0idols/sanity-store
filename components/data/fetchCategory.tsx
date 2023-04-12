async function fetchProducts(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/api/categories/${id}`
  );
  const data = await res.json();
  return data;
}
export default fetchProducts;
