"use client";
import { getImageUrl, uniqueId } from "@/lib/utils";
import { Card } from "../ui/card";
import { Handshake, PenTool, Settings, ShieldCheck } from "lucide-react";

export default function Choose() {
  const style = {
    backgroundImage: `url(${getImageUrl("company", "ag10.jpg")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderImage:
      "linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0, .7)) fill 1",
  };
  return (
    <div className="py-4 lg:py-16">
      <div className="flex px-4 lg:px-16  items-center flex-col gap-3">
        <h1 className="text-2xl pt-10 lg:pt-0 border-bottom self-center lg:text-4xl">
          Why Choose Us
        </h1>
        <p className="text-sm lg:text-base w-full lg:w-[50%] text-center">
          We’re your trusted local choice for construction and agricultural
          equipment. With expertise in diverse machines and a commitment to
          excellence, we deliver top-tier results in agriculture and allied
          fields.
        </p>
      </div>
      <div className="pt-16">
        <div style={style} className=" py-20 lg:py-28">
          <div className="grid px-4 lg:px-16  lg:grid-cols-3 gap-8">
            {data.map((item) => (
              <Card key={uniqueId()} className="p-8 py-8">
                <div className="flex flex-col gap-4">
                  <div className=" bg-green-600 rounded-full w-fit p-2">
                    <item.icon className="w-8 h-8 text-white " />
                  </div>
                  <h2 className="text-lg lg:text-2xl text-tertiary">
                    {item.title}
                  </h2>
                  <p className="text-base w-full leading-[1.7rem]">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    title: "Reliable Parts",
    description:
      "We provide an extensive selection of high-quality, dependable parts and accessories for all types of agricultural machinery. Our commitment to reliability ensures that your equipment continues to operate at peak performance, reducing the risk of unexpected downtime.",
    icon: Settings, // Icon representing machinery components
  },
  {
    title: "High-Performance Tools",
    description:
      "Our cutting-edge tools and machinery are specifically engineered to deliver the highest level of performance in the field. Built with advanced technology and designed with safety in mind, our equipment helps you achieve exceptional productivity and precision.",
    icon: PenTool, // Icon representing tools and equipment
  },
  {
    title: "Expert Service",
    description:
      "With a team of highly trained and experienced technicians, we provide comprehensive service and support for all your agricultural equipment needs. From routine maintenance to complex repairs, our experts are dedicated to ensuring that your machines perform reliably under any conditions. ",
    icon: Handshake, // Icon representing expert, trusted service
  },
];
