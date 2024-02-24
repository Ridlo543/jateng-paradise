// import fs from 'fs';
// import path from 'path';
// import markdownToHtml from '@/lib/utlis/markdownToHtml';

// export default function Destination({ content }: { content: string }) {
//     return
//     (
//     <>
//     <h1>Cek MD to html</h1>
//     <div dangerouslySetInnerHTML={{ __html: content }} />
//     </>
//     );
// }

// export async function getStaticProps() {
//   const markdownPath = path.join(process.cwd(), 'content/destination/borobudur.md');
//   const markdownContent = fs.readFileSync(markdownPath, 'utf8');
//   const content = await markdownToHtml(markdownContent);

//   return {
//     props: {
//       content,
//     },
//   };
// }

"use client";
import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Images } from "lucide-react";
import { Description } from "@radix-ui/react-toast";

const image = [
  "baturaden.jpg",
  "candi.jpg",
  "dataran-tinggi-dieng.jpg",
  "HeroBanner.png",
  "HeroBanner3.jpg",
];

export default function Destination() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="py-16">
        <div className=" flex-grow md:flex-grow-0 p-4 m-2 text-center">
          <div className="font-serif text-gray-1000 text-xl md:text-5xl text-opacity-60 align-middle">
            Baturaden - Banyumas
          </div>
        </div>
        <div className="flex content-center justify-center">
          {/* tempat gambar*/}
          <Carousel
            plugins={[plugin.current]}
            className="items-center w-2/3"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: image.length }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-ellipsis  *:outline-none *:shadow-none border-0">
                    <CardContent className="p-0.5 m-0 h-96">
                      <Image
                        src={`/images/${image[index]}`}
                        alt="Picture of Baturaden"
                        className="rounded-lg object-cover h-full w-full"
                        width={2000}
                        height={2000}
                      ></Image>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className=" flex-grow md:flex-grow-0 p-2 mx-16 my-4 text-left">
          <div className="font-serif text-gray-1000 leading-loose text-lg md:text-3xl text-opacity-50 align-middle">
            Description
            <div className="font-serif text-gray-800 text-base md:text-xl align-middle text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              placeat velit commodi laborum molestiae optio laudantium, unde
              itaque repudiandae illum, inventore beatae voluptate eveniet. Odit
              eveniet excepturi dignissimos quae inventore?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
