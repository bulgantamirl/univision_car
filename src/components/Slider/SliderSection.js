import "swiper/swiper-bundle.min.css";

import esn from "assets/esn.png";
import gopro from "assets/gopro.png";
import ipad from "assets/ipad.png";
import lake from "assets/lake.png";
import logo2 from "assets/logo2.png";
import looktv from "assets/looktv.png";
import nairamdal from "assets/nairamdal.png";
import petro from "assets/petro.png";
import rav4 from "assets/rav4.png";
import ravTitle from "assets/rav4Title.svg";
import toki from "assets/toki.png";
import ubcab from "assets/ubcab.png";
import ubeats from "assets/ubeats.png";
import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  {
    icon: toki,
    title: "Toki зогсоолын эрх",
    sub: "20’000₮",
  },
  {
    icon: ubcab,
    title: "UbCab",
    sub: "10’000₮",
  },
  {
    icon: ubeats,
    title: "UBeats",
    sub: "7’000₮",
  },
  {
    icon: esn,
    title: "ESN Mobile Legends",
    sub: "Тэмцээний тасалбар",
  },
  {
    icon: logo2,
    title: "Хятад багц",
    sub: "1 сарын эрх",
  },
  {
    icon: logo2,
    title: "Орос багц",
    sub: "1 сарын эрх",
  },
  {
    icon: logo2,
    title: "Sports апп",
    sub: "1 сарын эрх",
  },
  {
    icon: looktv,
    title: "LookTV Premium багц",
    sub: "1 сарын эрх",
  },
];

const cardItems = [
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
    image: ipad,
    title: "iPad 10th gen + magic keyboard",
    subtitle: "1 ширхэг",
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
  {
    image: rav4,
    title: "RAV4",
    subtitle: "1 азтан",
  },
];

const SliderSection = () => {
  return (
    <section
      id={"slider"}
      className={
        "h-auto w-full flex flex-col bg-white  justify-center items-center py-[90px] z-1"
      }
    >
      <div className={"w-full flex flex-col gap-4 items-center mb-[100px]"}>
        <img
          className={"object-contain max-w-[370px] w-[60%] h-auto"}
          src={ravTitle}
          alt={""}
        />
        <p className={"text-[#858585] text-[24px]"}>Супер бэлгүүд</p>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-full h-[400px] md:h-[450px] "
      >
        {cardItems?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center gap-4">
              <div
                className={
                  "w-[300px] h-[250px] md:h-[300px]  flex flex-col items-center justify-center"
                }
              >
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="h-40  md:h-60 object-contain"
                />
              </div>

              <h2 className="font-bold mt-4 text-[18px] md:text-[24px] my-0">
                {item?.title}
              </h2>
              <p className="text-gray-500 text-[16px] md:text-[20px] my-0">
                {item?.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 items-center justify-center gap-6 py-4 px-8 mt-[30px] sm:p-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[100px] h-[100px]"
            />
            <h3 className="font-semibold text-sm leading-tight my-0">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm my-0">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
