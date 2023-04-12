import Image from "next/image";

const Info = () => {
  return (
    <div className="container my-32">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col justify-center md:px-6 lg:w-1/2 text-center lg:text-left">
          <h2 className="md:text-4xl text-3xl uppercase tracking-widest font-bold py-10">
            bringout you the <span className="text-primary">best</span> audio
            gear{" "}
          </h2>
          <p className="text-gray-500 tracking-wide ">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="w-full h-[300px] bg-mobInfo  md:w-full md:h-[300px] md:bg-tabInfo lg:w-[540px] lg:h-[588px] lg:bg-deskInfo overflow-hidden bg-cover bg-center rounded-md">
          {/* <Image
            src="https://res.cloudinary.com/swdb/image/upload/v1679350335/audiophile/shared/desktop/image-best-gear_dyb1hl.jpg"
            fill
            alt="speaker"
            className="w-full h-auto"
            object-fit="cover"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Info;
