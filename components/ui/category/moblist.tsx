import { categories } from "@/lib/catdata";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
const MobileCategoryList = () => {
  return (
    <div className="lg:hidden container pt-32 bg-white">
      <div className="grid md:grid-cols-3 md:gap-8 ">
        {categories.map((category) => (
          <div key={category.id} className="-mt-32">
            <div className="bg-gray-100 mt-32 flex flex-col justify-center items-center h-1/2 py-12 rounded-md ">
              <Image
                src={category.image}
                alt={category.name}
                width={250}
                height={250}
                className="-mt-20"
              />
              <div className="pb-6 space-y-3 text-center flex flex-col justify-center items-center">
                <h3 className="tracking-widest uppercase font-bold">
                  {category.name}
                </h3>
                <a
                  href={`/${category.name}`}
                  className="text-xs text-gray-400 uppercase font-bold tracking-widest flex items-center"
                >
                  shop <ChevronRightIcon className="h-4 w-4" />{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCategoryList;
