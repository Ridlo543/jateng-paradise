import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../../public/images/img_1.jpg";
import slide_image_2 from "../../public/images/img_2.jpg";
import slide_image_3 from "../../public/images/img_3.jpg";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="sm:w-1/2 w-full overflow-hidden">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          340: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 1.75,
          },
        }}
        className="swiper-container overflow-hidden"
      >
        <div className="swiper-wrapper">
          {[slide_image_1, slide_image_2, slide_image_3].map((image, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide flex justify-center items-center rounded-2xl overflow-hidden blur-none transition-all duration-500 ease-in-out shadow-xl"
            >
              <div className="h-[350px] w-auto ">
                <Image
                  src={image}
                  alt={`slide ${index + 1}`}
                  fill
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
