import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn, uniqueId } from "@/lib/utils";

export default function Footer() {
  return (
    <div className=" lg:px-12 pt-7 lg:pt-16 py-16 mt-6 bg-[#e5e5e5] space-y-8">
      <div className="hidden lg:grid lg:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-300 pb-10">
        {footerData.map((fl) => (
          <div key={fl?.title} className=" space-y-4">
            <h2 className="text-md font-bold">{fl.title}</h2>
            <div className="grid gap-2">
              {fl.links?.map((link) => (
                <Link
                  href={link.url}
                  key={uniqueId()}
                  className="text-sm w-fit group relative text-gray-600 font-bold"
                >
                  <div
                    className={cn(
                      "absolute bottom-0 rounded left-0 h-[2px] w-0 bg-tertiary transition-all delay-75 duration-1000 ease-out group-hover:w-full group-hover:translate-x-0"
                    )}
                  ></div>
                  <div className="relative z-10 flex items-center gap-2 leading-12">
                    {link.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Accordion type="single" collapsible className=" lg:hidden w-full">
        {footerData.map((fl, i) => (
          <AccordionItem key={uniqueId()} value={`item-${i}`}>
            <AccordionTrigger
              isPlus={true}
              className="text-md font-bold gap-2 border-b hover:no-underline px-4 border-gray-400"
            >
              <span className="flex-1 flex justify-start">{fl.title}</span>
            </AccordionTrigger>
            <AccordionContent className="grid gap-2 px-8 py-4">
              {fl.links?.map((link) => (
                <Link
                  href={link.url}
                  key={uniqueId()}
                  className="text-sm text-gray-700 font-bold"
                >
                  {link.title}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="space-y-8 px-4">
        <div className="flex justify-center w-full flex-wrap lg:w-[45%] mx-auto gap-4 lg:gap-6">
          {simpleF.map((s) => (
            <Link
              href={s.link}
              key={uniqueId()}
              className="text-xs font-bold group relative text-gray-700"
            >
              <div
                className={cn(
                  "absolute bottom-0 rounded left-0 h-[2px] w-0 bg-tertiary transition-all delay-75 duration-1000 ease-out group-hover:w-full group-hover:translate-x-0"
                )}
              ></div>
              <div className="relative z-10 flex items-center gap-2 leading-12">
                {s.title}
              </div>
            </Link>
          ))}
        </div>
        <div className=" flex justify-center">
          <a
            href="https://meltechgrp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-xs"
          >
            Built by MEL Technologies
          </a>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-3">
          <div className="flex justify-center">
            <span className="text-xs font-bold text-gray-500">
              Copyright © {new Date(Date.now()).getFullYear()} Agcoms
              International.
            </span>
          </div>
          <div className="flex justify-center space-x-4">
            {[
              { name: "Facebook", link: "https://www.facebook.com/agcomsintl" },
              {
                name: "Instagram",
                link: "https://www.instagram.com/agcomsintl",
              },
              {
                name: "Linkedin",
                link: "https://www.linkedin.com/company/agcomsinternational/",
              },
              { name: "Twitter", link: "https://x.com/Agcomsintl" },
            ].map((s) => (
              <Link target="_blank" href={s.link} key={uniqueId()} className="">
                {s.name === "Facebook" && (
                  <Facebook className="text-blue-600 w-5 h-5" />
                )}
                {s.name === "Instagram" && (
                  <Instagram className="text-blue-500 w-5 h-5" />
                )}
                {s.name === "Linkedin" && (
                  <Linkedin className="text-blue-600 w-5 h-5" />
                )}
                {s.name === "Twitter" && (
                  <X strokeWidth={3} className="text-blue-500 w-5 h-5" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const footerData = [
  {
    title: "Equipment",
    links: [
      { title: "Agricultural Equipment", url: "/equipment/agriculture" },
      {
        title: "Construction Equipment",
        url: "/equipment/construction",
      },
      {
        title: "Forestry Equipment",
        url: "/equipment/forestry",
      },
      {
        title: "Tell us you're a Agcoms Fan",
        url: "/contact",
      },
    ],
  },
  {
    title: "Parts and Services",
    links: [
      {
        title: "Genuine Parts",
        url: "/parts",
      },
      {
        title: "Expert Service",
        url: "/parts#expert-service",
      },
      {
        title: "Online Support and Assistance",
        url: "/parts#online-support",
      },
      {
        title: "Order Online",
        url: "/parts#order",
      },
    ],
  },
  {
    title: "Company Information",
    links: [
      {
        title: "Corporate office",
        url: "/contact",
      },
      {
        title: "Customer Support",
        url: "/contact",
      },
      {
        title: "Additional Contacts",
        url: "/contact",
      },
    ],
  },
  {
    title: "About Us",
    links: [
      {
        title: "Our Mission",
        url: "/about",
      },
      {
        title: "Our Values",
        url: "/about",
      },
    ],
  },
];

const simpleF = [
  {
    link: "/about",
    title: "Privacy Policy",
  },
  {
    link: "/about",
    title: "Terms and Conditions",
  },
  {
    link: "/about",
    title: "Copy right information",
  },
];
