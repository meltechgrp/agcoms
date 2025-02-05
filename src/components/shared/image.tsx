"use client";
import { cn, getImageUrl } from "@/lib/utils";
import { useMemo } from "react";
import Img, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "width" | "height"> & {
  folderName: string;
  className?: string;
  src: string;
  alt: string;
  scale?: boolean;
  zoomIn?: boolean;
};

const Image = ({
  className,
  src,
  alt,
  folderName,
  scale,
  zoomIn,
  ...props
}: Props) => {
  return useMemo(
    () => (
      <div
        className={cn(
          "w-full overflow-hidden group relative h-full object-cover",
          className
        )}
      >
        <Img
          {...props}
          src={getImageUrl(folderName, src)}
          priority={true}
          alt={alt}
          fill={true}
          className={cn(
            " object-cover",
            scale && "group-hover:scale-110 transition-all duration-3000",
            zoomIn && "group-hover:scale-90 group-hover:object-scale-contain"
          )}
        />
      </div>
    ),
    [props]
  );
};

export default Image;
