import Image from "@/components/shared/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PartsBanner() {
  return (
    <div className="relative">
      <Image
        src={"parts.jpg"}
        className="w-full h-[25rem] lg:h-[30rem]"
        alt={"agcoms banner"}
        folderName="banners"
      />
      <div className=" absolute flex flex-col left-5 bottom-[1.5rem] lg:bottom-[5rem] space-y-2 lg:space-y-4 text-white backdrop-blur-sm rounded-xl bg-black/30 w-[70%] lg:w-[45%] px-4 py-7 lg:p-10">
        <p className="text-sm ">
          At AGCOMS, we know that reliable equipment is essential for productive
          work. Our comprehensive parts and service support is designed to keep
          your machines running at peak performance, supporting everything from
          farms to construction sites and forestry projects. Our dedicated
          service team and genuine parts ensure minimal downtime and maximum
          efficiency.
        </p>
        <div>
          <Link href={"/equipment"}>
            <Button
              size="sm"
              className="h-8 bg-tertiary text-white lg:h-9 text-xs lg:text-sm"
            >
              Available parts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
