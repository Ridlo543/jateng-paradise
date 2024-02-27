import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DestinationRepository } from "@/lib/repositories/destination";
import { Search } from "lucide-react";
import Image from "next/image";
import ListDestinations from "./list-destinations";

export default function Home() {
  const destinations = DestinationRepository.readAllDestinations();

  return (
    <>
      <section className="relative h-screen">
        <Image
          src="/images/HeroBanner7.jpg"
          fill
          alt="Jateng Paradise Background"
          className="absolute z-0 object-cover w-full h-full"
          priority={true}
          loading="eager"
        />
        <div className="absolute z-0 w-full h-full bg-black bg-opacity-20"></div>
        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full z-20 relative text-center text-white px-4">
          <h1 className=" font-bold text-4xl lg:text-5xl max-w-2xl mx-auto">
            Jelajahi Surga Tersembunyi
          </h1>
          <p className="text-md sm:text-lg md:text-xl mt-4 max-w-xl mx-auto">
            Temukan Keajaiban Alam, Kekayaan Budaya, dan Warisan Sejarah yang
            Tak Ternilai di Jawa Tengah.
          </p>

          <button
              className="flex flex-row justify-center items-center"
              aria-label="search"
              data-search-trigger
            >
              <Search className="mr-2 " />
            </button>
        </div>
      </section>

      <ListDestinations destinations={destinations} />
    </>
  );
}
