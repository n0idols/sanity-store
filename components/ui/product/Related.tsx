import Image from "next/image";

// interface RelatedProps {
//   relatedProducts: {
//     _id: string;
//     title: string;
//     slug: string;
//     mobileImage: string;
//   }[];
// }
const Related = ({ relatedProducts }: any) => {
  return (
    <div className="container mt-32 md:pb-32 pb-12">
      <h2 className="text-4xl text-center uppercase font-semibold mb-8">
        you make also like
      </h2>
      <div className="grid md:grid-cols-3 md:gap-8 gap-y-12">
        {relatedProducts.map(
          (item: {
            _id: string;
            title: string;
            slug: string;
            mobileImage: string;
          }) => (
            <div key={item._id} className="">
              <div className="bg-greys-two flex flex-col justify-center items-center rounded-lg">
                <Image
                  src={item.mobileImage}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="tracking-widest uppercase font-bold text-xl my-6">
                  {item.title}
                </h2>
                <a href={item.slug} className="btn">
                  see product
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Related;
