"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "../shared/image";
import Autoplay from "embla-carousel-autoplay";

export default function AboutCarousel() {
  const images = ["groupimage.jpg", "banner.jpg", "help.jpg", "connect1.jpg"];
  return (
    <div className=" relative">
      <Carousel
        plugins={[
          Autoplay({
            delay: 8000,
            jump: false,
          }),
        ]}
        className="w-full border-none"
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="p-0 border-none">
              <div className="">
                <Image
                  src={images[index]}
                  className="w-full h-[28rem] lg:h-[40rem]"
                  alt={"agcoms banner"}
                  folderName="banners"
                  folderName="home-banners"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className=" absolute p-6 lg:p-9 left-5 bottom-[1.5rem] backdrop-blur-md rounded-xl text-white bg-black/30 lg:bottom-[5rem] space-y-2 lg:space-y-3  w-[70%] lg:w-[45%]">
        <h1 className="text-base  lg:text-3xl ">Meet Our Dynamic Team</h1>
        <p className="text-sm ">
          Together, we collaborate, innovate, and inspire, turning challenges
          into opportunities and visions into reality. At AGCOMS, our people are
          not just employees—they are family, united in our mission to build a
          better tomorrow.
        </p>
      </div>
    </div>
  );
}
