import { getCategory } from "@/sanity/sanity-utils";

export default async function Speakers() {
  const speakers = await getCategory("speakers");

  return <pre>{JSON.stringify(speakers, null, 2)}</pre>;
}
