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
      {/* category filter */}
      <div className="max-w-[768px] mx-auto px-4 py-6">
        <ScrollArea>
          <div className="flex space-x-2 mb-4">
            {Constants.categories.map((item, index) => {
              const isSelected = selectedCategoryFilter === item;

              return (
                <Button
                  key={"category-filter-item-" + index}
                  onClick={() => setSelectedCategoryFilter(item)}
                  variant={"outline"}
                  className={` cursor-pointer hover:bg-green-800 hover:text-white
                   ${
                     isSelected
                       ? "bg-green-700 text-white hover:bg-green-800"
                       : ""
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

      {/* list destinations */}
      <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 gap-4">
        {props.destinations
          .filter((item) => {
            const selected = selectedCategoryFilter.toLowerCase();

            if (selected === "all") return item;
            else return item.category === selected;
          })
          .map((item, index) => (
            <div
              key={"destination-card-item-" + index}
              className="flex sm:flex-row flex-col justify-center items-center"
            >
              <Gallery />
              <div className="flex-1 ml-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href={"/destination/" + item.slug}>
                      <Button variant={"link"} className="px-0">
                        Detail Tempat
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
