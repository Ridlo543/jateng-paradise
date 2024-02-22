"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";

const places = [
  { id: 1, name: "Candi Borobudur", category: "Banjarnegara" },
  { id: 2, name: "Candi Prambanan", category: "Batang" },
  { id: 3, name: "Gunung Merapi", category: "Brebes" },
  { id: 4, name: "Pantai Jepara", category: "Demak" },
  { id: 5, name: "Keraton Yogyakarta", category: "Grobogan" },
];

// const categories = ["Semua Kategori", "Alam", "Budaya", "Sejarah"];
const categories = [
  "All",
  "Banjarnegara",
  "Banyumas",
  "Batang",
  "Blora",
  "Boyolali",
  "Brebes",
  "Cilacap",
  "Demak",
  "Grobogan",
  "Jepara",
  "Karanganyar",
  "Kebumen",
  "Kendal",
  "Klaten",
  "Kudus",
  "Magelang",
  "Pati",
  "Pekalongan",
  "Pemalang",
  "Purbalingga",
  "Purworejo",
  "Rembang",
  "Semarang",
  "Sragen",
  "Sukoharjo",
  "Tegal",
  "Temanggung",
  "Wonogiri",
  "Wonosobo",
  "Salatiga",
  "Surakarta",
];

export default function FilterContent() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredPlaces =
    selectedCategory && selectedCategory !== "All"
      ? places.filter((place) => place.category === selectedCategory)
      : places;

  return (
    <section className="mx-auto max-w-5xl py-6">
      <div className="flex flex-wrap space-x-4 mb-4 items-center justify-center ">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`p-2 border rounded m-1 ${
              selectedCategory === category ||
              (selectedCategory === "" && category === "Semua Kategori")
                ? "bg-green-700 text-white"
                : ""
            }`}
            onClick={() =>
              handleCategoryChange(
                category === "Semua Kategori" ? "" : category
              )
            }
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        <ScrollArea>
          <div className="flex space-x-2 mb-4">
            {categories.map((item, index) => (
              <Card className="px-4 py-2">
                <p>{item}</p>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <ul>
        {filteredPlaces.map((place) => (
          <li key={place.id} className="mb-2">
            {place.name} - {place.category}
          </li>
        ))}
      </ul>
    </section>
  );
}
