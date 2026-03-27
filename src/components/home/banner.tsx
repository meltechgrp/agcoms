import Link from "next/link";
import Image from "../shared/image";
import { Button } from "../ui/button";
import { Carousel } from "../ui/carousel";

export default function Banner() {
  return (
    <div className="relative">
      {/* <Carousel> */}
      <Image
        src={"ag4.jpeg"}
        className="w-full h-[28rem] lg:h-[44rem]"
        alt={"agcoms banner"}
        folderName="company"
      />
      <div className=" absolute flex flex-col left-5 bottom-[1.5rem] lg:bottom-[5rem] space-y-2 lg:space-y-4 text-white backdrop-blur-sm rounded-xl bg-black/30 w-[60%] lg:w-[45%] px-4 py-7 lg:p-10">
        <h1 className="text-base lg:text-3xl border-bottom self-start flex ">
          Delivering Nigeria's Agricultural Transformation at National Scale
        </h1>
        <p className="text-[11px] line-clamp-5 lg:line-clamp-none lg:text-sm">
          Welcome to Agcoms International Trading Limited, a trusted dealer of
          agricultural, construction, golf & Turf, and forestry equipment across
          Africa and Middle East. Our commitment is to provide you with
          reliable, high-performance tools that keep you ahead in your industry”
        </p>
        <div>
          <Link href={"/about"}>
            <Button
              size="sm"
              className="h-8 bg-tertiary text-white lg:h-9 text-xs lg:text-sm"
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
