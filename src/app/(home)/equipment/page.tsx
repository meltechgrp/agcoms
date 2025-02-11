import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "@/components/shared/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import path from "path";
import fs from "fs";
import PdfPreview from "./components/preview";

function getPdfFiles() {
  const pdfDirectory = path.join(process.cwd(), "public/uploads/pdf");
  const pdfFiles = fs
    .readdirSync(pdfDirectory)
    .filter((file) => file.endsWith(".pdf"));
  return pdfFiles.map((file) => ({
    name: file,
    url: `/uploads/pdf/${file}`,
  }));
}

async function Products() {
  const pdfFiles = getPdfFiles();
  return (
    <div>
      <Breadcrumb className="px-4 lg:px-12 py-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-base font-medium text-green-500"
              href="/"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className=" text-green-500 font-bold" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-sm text-gray-500 font-normal capitalize">
              Equipment
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="pt-4">
        <div className=" mb-12 relative lg:h-[50rem] gap-6 flex flex-col justify-center items-center">
          <div className=" relative w-screen lg:w-[1350px] object-fill h-[20rem] lg:h-[50rem] lg:top-0 lg:left-0">
            <Image
              src={"equipment.jpg"}
              alt={"Equipment"}
              scale={true}
              className=" lg:object-cover relative lg:absolute w-full h-full"
              folderName="banners"
            />
          </div>
          <div className=" hidden absolute lg:flex flex-col left-5 bottom-[1.5rem] lg:bottom-[5rem] space-y-2 lg:space-y-4 text-white backdrop-blur-md rounded-xl bg-black/30 w-[60%] lg:w-[45%] px-7 py-8 lg:p-10">
            <h1 className="text-base lg:text-3xl border-bottom self-start flex ">
              Company Profile
            </h1>
            <p className="text-sm line-clamp-5 lg:line-clamp-none lg:text-sm">
              Explore the potential of AGCOMS International’s robust equipment
              lineup. Our comprehensive brochure offers detailed insights into
              our range of machinery for agriculture, construction, forestry,
              golf, and turf. Each piece is engineered to excel in diverse
              environments, ensuring maximum efficiency and reliability.
              Discover specifications, features, and unique benefits tailored to
              your industry’s needs
            </p>
            <div className=" flex gap-4">
              <Link
                href={"/AGCOMS Company Profile.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className=" bg-tertiary hover:bg-tertiary/90 text-white dark:text-white font-bold text-base"
                  size={"lg"}
                >
                  View Profile
                </Button>
              </Link>
              <Link
                href={"/AGCOMS Company Profile.pdf"}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className=" bg-secondary hover:bg-secondary/90 text-black text-base font-bold"
                  size={"lg"}
                >
                  Download Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" lg:hidden py-6 flex flex-col gap-3 px-4 ">
          <h1 className="text-base lg:text-3xl border-bottom self-start flex ">
            Equipment Brochure
          </h1>
          <p className="text-sm">
            Explore the potential of AGCOMS International’s robust equipment
            lineup. Our comprehensive brochure offers detailed insights into our
            range of machinery for agriculture, construction, forestry, golf,
            and turf. Each piece is engineered to excel in diverse environments,
            ensuring maximum efficiency and reliability. Discover
            specifications, features, and unique benefits tailored to your
            industry’s needs
          </p>
          <div>
            <Link href={"#"} download target="_blank" rel="noopener noreferrer">
              <Button
                className=" bg-tertiary hover:bg-tertiary/90 text-white"
                size={"lg"}
              >
                Download Brochure
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {pdfFiles.map((pdf) => (
            <Card
              key={pdf.name}
              className="p-4 flex flex-col hover:shadow-md transition-all duration-700 gap-2 items-center text-center"
            >
              <PdfPreview url={pdf.url} alt={`Preview of ${pdf.name}`} />
              <h2 className="text-base font-bold mb-2">
                {pdf.name.replace(".pdf", "")}
              </h2>
              <div className="flex gap-2">
                <Link href={pdf.url} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-tertiary hover:bg-tertiary/90 text-white font-bold text-base px-6">
                    View
                  </Button>
                </Link>
                <Link
                  href={pdf.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-secondary hover:bg-secondary/90 text-black font-bold text-base">
                    Download
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
