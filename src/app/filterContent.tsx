"use client";

import { useState } from "react";

const places = [
  { id: 1, name: "Candi Borobudur", category: "Sejarah" },
  { id: 2, name: "Candi Prambanan", category: "Sejarah" },
  { id: 3, name: "Gunung Merapi", category: "Alam" },
  { id: 4, name: "Pantai Jepara", category: "Alam" },
  { id: 5, name: "Keraton Yogyakarta", category: "Budaya" },
];

const categories = ["Semua Kategori", "Alam", "Budaya", "Sejarah"];

export default function FilterContent() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredPlaces =
    selectedCategory && selectedCategory !== "Semua Kategori"
      ? places.filter((place) => place.category === selectedCategory)
      : places;

  return (
    <section className="mx-auto max-w-5xl py-6">
      <div className="flex space-x-4 mb-4 items-center justify-center">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`p-2 border rounded ${
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
