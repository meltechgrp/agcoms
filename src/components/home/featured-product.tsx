import { uniqueId } from "@/lib/utils";
import Link from "next/link";
import Image from "../shared/image";

export default function FeaturedProducts() {
  return (
    <div className="lg:flex lg:justify-center lg:px-16 bg-white py-8">
      <div className="flex justify-center lg:w-fit flex-col lg:gap-8 lg:flex-row items-center">
        {data.map((c, i) => (
          <Link key={uniqueId()} href={c.link} className="w-[75%] lg:w-48">
            <div className="flex flex-col border-b transition-color hover:cursor-pointer duration-1000 has-[h4]:hover:text-blue-600  px-4 lg:px-0 border-gray-200 lg:border-0 lg:grid-cols-1 gap-2 lg:gap-3 justify-center items-center">
              <div className="h-24 lg:h-24 w-28 ">
                <Image
                  src={c.image}
                  className=" object-cover w-full h-full transition-transform duration-1000 hover:scale-110"
                  alt={c.title}
                  folderName="banners"
                />
              </div>
              <h4 className="text-base font-semibold text-center">{c.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    link: "/equipment",
    image: "agri.png",
    title: "Agriculture",
  },
  {
    link: "/equipment",
    image: "construction.png",
    title: "Construction",
  },
  {
    link: "/equipments",
    image: "lawn.png",
    title: "Lawn & Garden",
  },
  {
    link: "/equipment",
    image: "sport.png",
    title: "Golf & Sports Turf",
  },
  {
    link: "/equipment",
    image: "forestry.png",
    title: "Forestry",
  },
];
