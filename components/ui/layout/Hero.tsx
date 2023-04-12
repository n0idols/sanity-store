import React from "react";
const Hero = () => {
  return (
    <section className="bg-mobHero md:bg-tabHero lg:bg-deskHero bg-cover bg-center md:h-[800px] h-[600px] -mt-24">
      <div className="container">
        <div className="flex flex-col justify-center h-full text-center lg:text-left">
          <div className="lg:w-1/3 lg:mx-0 md:w-1/2 mx-auto space-y-6 leading-6 px-4 md:px-2">
            <p className="wider text-gray-500 uppercase">new product</p>
            <h1 className="text-white">XX99 MARK II HEADPHONES</h1>
            <p className="text-gray-300 tracking-wide pb-5">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div>
              <a href="/headphones/1" className="btn">
                see product
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
