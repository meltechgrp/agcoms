"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { uniqueId } from "@/lib/utils";
import useNavStore from "@/stores/use-nav-store";

function Sidebar() {
  const [state1, setState1] = useState(false);

  const store = useNavStore();
  const { product, pages } = store;
  return (
    <Sheet open={state1} onOpenChange={setState1}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 lg:hidden border-0"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent close={true} side="right" className="px-0 duration-1000">
        <SheetClose className="border-b flex w-full px-3 border-gray-200 pb-3">
          <span className="flex items-center text-tertiary font-bold">
            <ChevronLeft className="w-4 h-4 mr-2" /> Back
          </span>
        </SheetClose>
        <nav className="flex flex-col  text-lg py-4 font-medium">
          <Link
            href="/"
            onClick={() => setState1(false)}
            className={
              " flex h-12 font-bold text-sm text-gray-500 items-center hover:bg-gray-200 hover:text-blue-600 transition-colors duration-700  px-[1rem] "
            }
          >
            <h3 className="font-medium">Home</h3>
          </Link>
          {pages.map((page, i) => (
            <div key={uniqueId()}>
              {page.slug === "equipment" ? (
                <Sheet>
                  <SheetTrigger asChild>
                    <div className="flex h-12 font-bold text-sm text-gray-500 items-center hover:bg-gray-200 hover:text-blue-600 transition-colors duration-700  px-[1rem] justify-between">
                      {page.name} <ChevronRight className="w-5 h-5 ml-1" />
                      <span className="sr-only">Toggle sidebar menu</span>
                    </div>
                  </SheetTrigger>
                  <SheetContent
                    close={true}
                    overlay={true}
                    side="right"
                    className="px-0 duration-1000"
                  >
                    <SheetClose className="border-b flex w-full px-3 border-gray-200 pb-3">
                      <span className="flex items-center text-blue-600 font-bold">
                        <ChevronLeft className="w-4 h-4 mr-2" /> Back
                      </span>
                    </SheetClose>
                    <nav className="flex flex-col  text-lg py-4 font-medium">
                      <div className="px-2">
                        <Link href={"/equipment"}>
                          <SheetClose
                            onClick={() => setState1(false)}
                            className="text-sm flex items-center px-2 font-medium"
                          >
                            All equipment (A -Z)
                          </SheetClose>
                        </Link>
                      </div>
                      <div className="px-2 pt-3">
                        {product.map((c) => (
                          <Link key={uniqueId()} href={c.link}>
                            <SheetClose
                              onClick={() => setState1(false)}
                              className=" px-2 h-10 flex items-center hover:bg-gray-200 text-nowrap text-sm  font-semibold"
                            >
                              {c.name}
                            </SheetClose>
                          </Link>
                        ))}
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              ) : (
                <Link href={page.link}>
                  <SheetClose className="text-sm capitalize flex items-center px-2 font-semibold">
                    <span className="px-2 h-12 flex items-center hover:bg-gray-200 text-nowrap text-sm font-bold">
                      {page.name}
                    </span>
                  </SheetClose>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
