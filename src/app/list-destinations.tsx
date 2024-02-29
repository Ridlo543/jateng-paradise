"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Constants } from "@/lib/constants/constants";
import { DestinationItem } from "@/lib/types/destination-item";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Gallery from "./gallery";

type Props = {
  destinations: Array<DestinationItem>;
};

export default function ListDestinations(props: Props) {
  const [selectedCategoryFilter, setSelectedCategoryFilter] =
    useState<string>("All");

  return (
    <>
      <div className="absolute top-full left-0 w-full z-10 bg-opacity-0">
        <div className="max-w-[768px] mx-auto px-4 py-6">
          <ScrollArea>
            <div className="flex space-x-2 mb-4">
              {Constants.categories.map((item, index) => {
                const isSelected = selectedCategoryFilter === item;

                return (
                  <Button
                    key={"category-filter-item-" + index}
                    onClick={() => setSelectedCategoryFilter(item)}
                    className={` cursor-pointer hover:bg-green-800 hover:text-white
                   ${
                     isSelected
                       ? "bg-green-700 text-white hover:bg-green-800"
                       : "bg-white text-black"
                   }`}
                  >
                    {isSelected && <Check className="w-4 h-4 mr-2" />}
                    {item}
                  </Button>
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>

      {/* list destinations */}
      <div className=" grid grid-cols-1">
        {props.destinations
          .filter((item) => {
            const selected = selectedCategoryFilter.toLowerCase();

            if (selected === "all") return item;
            else return item.category === selected;
          })
          .map((item, index) => (
            <div
              key={"destination-card-item-" + index}
              className="relative h-screen flex justify-center items-center bg-center bg-fixed bg-no-repeat bg-cover px-4"
              style={{
                backgroundImage: `url(${item.background})`,
                minHeight: "66vh",
              }}
            >
              <div className="content flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto w-full py-4">
                <div className="flex-1 mx-4  bg-black bg-opacity-50 rounded-lg p-4">
                  <CardHeader>
                    <CardTitle className="text-white">{item.name}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href={"/destination/" + item.slug}>
                      <Button variant={"link"} className="px-0 text-white">
                        Detail Tempat <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </div>

                {/* <div className="w-1/2 h-[66vh] my-4 bg-gray-200 bg-opacity-50 rounded-lg"></div> */}
                <Gallery />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
