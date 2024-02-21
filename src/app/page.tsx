import Image from "next/image";
import { useState } from "react";
import FilterContent from "./filterContent";

export default function Home() {
  return (
    <>
      <section className="relative h-screen">
        <Image
          src="/images/HeroBanner.png"
          layout="fill"
          alt="Jateng Paradise Background"
          className="absolute z-0 object-cover"
        />
        {/* overlay untuk masking gelap */}
        <div className="absolute z-10 w-full h-full bg-black bg-opacity-10"></div>{" "}
        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full z-20 relative text-center text-white px-4">
          <h1 className="text-3xl font-bold lg:text-5xl max-w-2xl mx-auto">
            {" "}
            {/* Menyesuaikan ukuran dan memperpendek lebar maksimal tagline */}
            Jelajahi Surga Tersembunyi
          </h1>
          <p className="text-lg lg:text-xl mt-4 max-w-xl mx-auto">
            Temukan Keajaiban Alam, Kekayaan Budaya, dan Warisan Sejarah yang
            Tak Ternilai di Jawa Tengah.
          </p>
          {/* searchbar */}
          <div className="max-w-md mx-auto mt-4">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Explore"
              />
            </div>
          </div>
        </div>
      </section>
      <FilterContent />
    </>
  );
}
