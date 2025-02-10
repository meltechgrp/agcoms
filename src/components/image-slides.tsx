"use client";

import React, { useState } from "react";
import Image from "./shared/image";
import { ImageType } from "./shared/image-uploader";
import { cn } from "@/lib/utils";

interface Props {
  images: ImageType[];
}

const ImageSlides = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className="h-full ">
      <div className=" relative gap-2 h-full">
        {images.length > 1 && (
          <div className="flex absolute h-full w-[4rem] z-20 top-0 left-0 items-center">
            <div className="flex flex-col px-px bg-white py-3 rounded-md gap-1 w-full">
              {images.map((image, index) => (
                <div
                  className={cn(
                    "h-12 w-16 px-2",
                    image.url === currentImage.url
                      ? "border-l-4 border-blue-600"
                      : ""
                  )}
                >
                  <Image
                    key={image.url}
                    src={image.url}
                    alt={currentImage.url.split(".")[0]}
                    onClick={() => setCurrentImage(image)}
                    className="rounded-md h-full"
                    folderName="products"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-full h-full">
          <Image
            src={currentImage.url}
            folderName="products"
            alt={currentImage.url.split(".")[0]}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlides;
