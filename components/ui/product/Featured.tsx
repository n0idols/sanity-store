import Image from "next/image";
const Featured = () => {
  return (
    <section className="container">
      <div className="bg-primary rounded-md px-12 pt-28 pb-12">
        <div className="bg-circles bg-cover bg-center">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex justify-center px-12">
              <Image
                src="https://res.cloudinary.com/swdb/image/upload/v1679350326/audiophile/home/desktop/image-speaker-zx9_frwhwm.png"
                width={400}
                height={400}
                alt="speaker"
              />
            </div>
            <div className="lg:px-12 lg:text-left text-center">
              <div className="flex flex-col mt-2 h-full lg:space-y-7 space-y-4 justify-center">
                <h1 className="uppercase text-white">
                  ZX9 <br />
                  Speaker
                </h1>
                <p className="pb-4 text-gray-200 lg:w-full md:w-1/2 w-full mx-auto">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <div>
                  <a href="" className="btn-black">
                    See Product
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zx7 lg:bg-cover lg:bg-right-bottom  my-14">
        <div className="grid md:grid-cols-2 gap-12 lg:px-24 px-8">
          <div className="flex justify-center flex-col h-[320px]">
            <div>
              <h3 className="uppercase wide font-semibold text-2xl pb-12">
                ZX7 speaker
              </h3>
            </div>
            <div>
              <a href="" className="btn-outline">
                {" "}
                see product
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-8 gap-2">
        <div className="bg-yx1 h-[320px] bg-cover bg-center rounded-md"></div>
        <div className="bg-gray-100 rounded-md flex justify-center flex-col lg:pl-24 pl-4 p-8">
          <div>
            <h3 className="uppercase wide font-semibold text-2xl md:pb-12 pb-8">
              yx1 earphones
            </h3>
          </div>
          <div>
            <a href="" className="btn-outline">
              {" "}
              see product
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Featured;
