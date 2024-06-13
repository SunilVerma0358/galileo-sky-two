"use client";
import React, { useState } from "react";
import GaliloeSkyNav from "./GaliloeSkyNav";
import { HeroSocialIconArray } from "./common/Helper";
import Link from "next/link";
// import Image from "next/image";
const HeroSection = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="max-w-[1920px] mx-auto bg-[url(../../public/assets/images/webp/hero-section-bg.webp)] min-h-screen bg-cover bg-no-repeat bg-center relative z-10 overflow-hidden">
      <>
        <GaliloeSkyNav />
      </>

      <div
        className={`${
          sidebar ? "max-md:right-0" : ""
        } absolute z-20 max-md:-right-[68px] duration-300 md:right-0 top-[30%] w-[68px] h-[368px] bg-nav-bg backdrop:blur-[10.92px] flex justify-center py-[70px] px-[22px] flex-col-reverse gap-7 `}
      >
        <span
          className="bg-white absolute top-[30%] -left-[15px] w-[15px] h-[145px] rounded-[30px_0_0_30px]"
          onClick={() => setSidebar(!sidebar)}
        ></span>
        {HeroSocialIconArray.map((obj, index) => (
          <Link
            key={index}
            href="#!"
            className="w-9 h-9 rounded-[36px] flex justify-center items-center"
          >
            {obj.socialIcon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
