import "swiper/swiper-bundle.min.css";

import gopro from "assets/gopro.png";
import ipad from "assets/ipad.png";
import lake from "assets/lake.png";
import nairamdal from "assets/nairamdal.png";
import petro from "assets/petro.png";
import rav4 from "assets/rav4.png";
import ravTitle from "assets/rav4Title.svg";
import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const cardItems = [
  {
    image: gopro,
    title: "GoPro 12 Hero Black",
    subtitle: "1 ширхэг",
  },
  {
    image: rav4,
    title: "RAV4",
    subtitle: "1 азтан",
  },
  {
    image: ipad,
    title: "iPad 10th gen + magic keyboard",
    subtitle: "1 ширхэг",
  },
  {
    image: gopro,
    title: "GoPro 12 Hero Black",
    subtitle: "1 ширхэг",
  },
  {
    image: petro,
    title: "Петровисын бензин",
    subtitle: "1,000,000 ₮",
  },
  {
    image: lake,
    title: "Toilogt camp",
    subtitle: "2 том хүн, 2 хүүхэд",
  },
  {
    image: nairamdal,
    title: "Найрамдал зуслан",
    subtitle: "1 хүүхэд",
  },
];

const SliderSection = () => {
  return (
    <section
      id={"slider"}
      className={
        "h-[800px] w-screen flex flex-col bg-white  justify-center items-center z-1"
      }
    >
      <div className={"w-full flex flex-col gap-4 items-center mb-[100px]"}>
        <img
          className={"object-contain max-w-[370px] w-full h-auto"}
          src={ravTitle}
          alt={""}
        />
        <p className={"text-[#858585] text-[24px]"}>Шагналууд</p>
      </div>

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-full h-[400px]"
      >
        {cardItems?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center gap-4">
              <img
                src={item?.image}
                alt={item?.title}
                className="h-60 object-contain"
              />
              <h2 className="font-bold mt-4 text-[24px] my-0">{item?.title}</h2>
              <p className="text-gray-500 text-[20px] my-0">{item?.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderSection;
