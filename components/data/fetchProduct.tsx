async function fetchProduct(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/api/products/${id}`
  );
  const data = await res.json();
  return data;
}
export default fetchProduct;
