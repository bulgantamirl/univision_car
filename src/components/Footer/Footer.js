import ravsub from "assets/rav4subtitle.svg";
import ravTitle from "assets/rav4Title.svg";
import React from "react";

const Footer = () => {
  return (
    <div
      className={
        "w-full bg-white h-[500px] flex flex-col items-center justify-center"
      }
    >
      <div className={"w-full flex flex-col gap-4 items-center mb-[60px]"}>
        <img
          className={"object-contain max-w-[570px] w-[60%] h-auto"}
          src={ravTitle}
          alt={""}
        />
        <img
          className={"object-contain max-w-[570px] w-[60%] h-auto"}
          src={ravsub}
          alt={""}
        />
        <p className={"text-gray-800 text-[24px]"}>
          Удирдлагаараа шинэ машинаа асаа
        </p>
      </div>
      <p className={"text-[#858585] text-[18px]"}>
        Урамшууллын хугацаа: 04/16/2025 → 05/26/2025
      </p>
    </div>
  );
};

export default Footer;
