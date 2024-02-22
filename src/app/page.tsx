import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import FilterContent from "./filterContent";

export default function Home() {
  return (
    <>
      <section className="relative h-screen">
        <Image
          src="/images/HeroBanner7.jpg"
          layout="fill"
          alt="Jateng Paradise Background"
          className="absolute z-0 object-cover w-full h-full"
          priority={true}
          loading="eager"
        />
        <div className="absolute z-0 w-full h-full bg-black bg-opacity-20"></div>
        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full z-20 relative text-center text-white px-4">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto">
            Jelajahi Surga Tersembunyi
          </h1>
          <p className="text-md sm:text-lg md:text-xl mt-4 max-w-xl mx-auto">
            Temukan Keajaiban Alam, Kekayaan Budaya, dan Warisan Sejarah yang Tak Ternilai di Jawa Tengah.
          </p>

          <Card className="flex items-center px-4 py-2 my-3 w-full max-w-md sm:max-w-lg md:max-w-xl lg:min-w-[480px]">
            <Search className="mr-2 text-card-foreground" />
            <Input
              placeholder="Explore a new place"
              className="w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
            />
          </Card>
        </div>
      </section>
      <FilterContent />
    </>
  );
}