"use client";
import Link from "next/link";
import Image from "../shared/image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Banner() {
  const [api, setApi] = React.useState<CarouselApi>();
  const plugin = React.useRef(Autoplay({ delay: 4000 }));
  const slides = ["ag-slide2.jpeg", "ag-slide1.jpeg", "ag-slide3.jpeg"];
  return (
    <div className="relative">
      {/* <Carousel> */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-[28rem] lg:h-[44rem]">
          {slides.map((_) => (
            <CarouselItem>
              <Image
                src={_}
                className="w-full h-full"
                alt={"agcoms banner"}
                folderName="company"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className=" absolute flex flex-col left-5 bottom-[1.5rem] lg:bottom-[5rem] space-y-2 lg:space-y-4 text-white backdrop-blur-sm rounded-xl bg-black/30 w-[60%] lg:w-[45%] px-4 py-7 lg:p-10">
        <h1 className="text-base lg:text-3xl border-bottom self-start flex ">
          Delivering Nigeria's Agricultural Transformation at National Scale
        </h1>
        <p className="text-[11px] line-clamp-5 lg:line-clamp-none lg:text-sm">
          Appointed under Nigeria's Federal Executive Council-approved NADF
          programme to supply and support 2,000 John Deere tractors for the
          Government of Nigeria — AGCOMS International brings sovereign-level
          procurement capability, proven technical expertise, and a sustained
          commitment to agricultural transformation at national scale.
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
