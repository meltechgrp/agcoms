"use client";

import { getImageUrl } from "@/lib/utils";

export default function AboutAgcoms() {
  const style = {
    backgroundImage: `url(${getImageUrl("banners", "building.jpg")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderImage:
      "linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.5)) fill 1",
  };
  const content = `AGCOMS International Trading Limited stands at the forefront of
						innovation, providing advanced solutions in agricultural and
						construction equipment. Rooted in a commitment to excellence, AGCOMS
						is dedicated to empowering farmers, builders, and industries
						worldwide with high-quality, reliable machinery that drives
						productivity and efficiency. We specialize in offering a
						comprehensive range of equipment tailored for various sectors,
						including agriculture, forestry, mining, and construction. Our
						products are built to withstand diverse working environments, making
						them suitable for both large-scale commercial operations and
						smaller, specialized applications.`;
  return (
    <div className="py-12 flex flex-col-reverse lg:flex-row space-y-8">
      <div
        style={style}
        className="py-16 h-[20rem] bg-center lg:h-[40rem] px-4 flex items-end lg:justify-end "
      >
        <div className="p-8 lg:p-9 hidden lg:flex flex-col text-white space-y-6 lg:backdrop-blur-md lg:w-1/2 lg:bg-black/30">
          <h1 className="text-2xl self-start border-bottom lg:text-4xl">
            ABOUT US
          </h1>
          <p className="text-sm leading-6 lg:leading-8">{content}</p>
        </div>
      </div>
      <div className="p-8 lg:p-9 flex lg:hidden flex-col  space-y-6 ">
        <h1 className="text-2xl self-start border-bottom lg:text-4xl">
          ABOUT US
        </h1>
        <p className="text-sm leading-6 lg:leading-8">{content}</p>
      </div>
    </div>
  );
}
