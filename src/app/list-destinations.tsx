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

type Props = {
  destinations: Array<DestinationItem>;
};

export default function ListDestinations(props: Props) {
  const [selectedCategoryFilter, setSelectedCategoryFilter] =
    useState<string>("All");

  return (
    <>
      <p className="text-3xl font-semibold">List Destinations</p>

      {/* category filter */}
      <div className="max-w-[768px] mx-auto px-4">
        <ScrollArea>
          <div className="flex space-x-2 mb-4">
            {Constants.categories.map((item, index) => {
              const isSelected = selectedCategoryFilter === item;

              return (
                <Button
                  key={"category-filter-item-" + index}
                  onClick={() => setSelectedCategoryFilter(item)}
                  variant={isSelected ? "default" : "outline"}
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
      <div className="mx-auto max-w-[768px] px-4 grid grid-cols-2 gap-2">
        {props.destinations
          .filter((item) => {
            const selected = selectedCategoryFilter.toLowerCase();

            if (selected === "all") return item;
            else return item.category === selected;
          })
          .map((item) => (
            <Card>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={"/destination/" + item.slug}>
                  <Button variant={"link"} className="px-0">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </>
  );
}
