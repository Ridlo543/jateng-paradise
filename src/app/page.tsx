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
        <div
          className="absolute z-0 w-full h-full bg-center bg-fixed bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/images/HeroBanner7.jpg')" }}
        >
          <div className="absolute w-full h-full bg-black bg-opacity-20"></div>
        </div>
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
            className="flex flex-row justify-center items-center py-4"
            aria-label="search"
            data-search-trigger
          >
            <Card className="flex items-center px-4 py-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:min-w-[480px]">
              <Search className="mr-2 text-card-foreground" />
              <Input
                placeholder="Explore a new place"
                className="w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
              />
            </Card>
          </button>
        </div>
      </section>

      <ListDestinations destinations={destinations} />
    </>
  );
}
