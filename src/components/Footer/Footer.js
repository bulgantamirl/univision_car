import ravTitle from "assets/rav4Title.svg";
import React from "react";

const Footer = () => {
  return (
    <div
      className={
        "w-full bg-white h-[400px] flex flex-col items-center justify-center"
      }
    >
      <div className={"w-full flex flex-col gap-4 items-center mb-[60px]"}>
        <img
          className={"object-contain max-w-[370px] w-full h-auto"}
          src={ravTitle}
          alt={""}
        />
        <p className={"text-gray-800 text-[24px]"}>
          Удирдлагаараа шинэ машинаа асаа
        </p>
      </div>
      <p className={"text-[#858585] text-[18px]"}>
        Урамшууллын хугацаа: 04/15/2025 → 05/26/2025
      </p>
    </div>
  );
};

export default Footer;
