import Image from "../shared/image";
import { Button } from "../ui/button";

export default function Governace() {
  return (
    <div className="grid lg:grid-cols-2 py-4">
      <div className="p-4 lg:p-16 justify-center flex flex-col  space-y-6 ">
        <h1 className="text-2xl self-start border-bottom lg:text-4xl">
          Governance
        </h1>
        <p className="text-sm lg:text-base leading-6 lg:leading-8">
          Strong governance is essential to maintaining transparency and
          accountability in our operations. Our leadership adheres to rigorous
          governance practices, ensuring responsible decision-making, effective
          risk management, and compliance with all applicable laws and
          regulations. We regularly review and update our policies to reflect
          the latest standards and best practices in corporate governance,
          supporting our mission to build a sustainable and ethical business for
          the long term. For more information on our ethical guidelines and
          governance policies, please refer to our full Ethics and Compliance
          document
        </p>
        <div className="">
          <Button className="bg-green-500 hover:bg-green-500 text-white font-semibold w-56 h-12">
            Learn More
          </Button>
        </div>
      </div>
      <div className="h-full flex items-center">
        <div className="w-full h-full  ">
          <Image
            src={"ag12.jpg"}
            className="w-full h-full object-cover"
            alt={"agcoms banner"}
            folderName="company"
          />
        </div>
      </div>
    </div>
  );
}
