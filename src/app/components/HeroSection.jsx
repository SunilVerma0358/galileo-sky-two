"use client";
import React, { useEffect, useState } from "react";
import GaliloeSkyNav from "./GaliloeSkyNav";
import { HeroSocialIconArray } from "./common/Helper";
import Link from "next/link";
import Image from "next/image";
const HeroSection = () => {
  const [sidebar, setSidebar] = useState(false);
  const [presentVideo, setPresentVideo] = useState(0);
  const videos = [
    "/assets/video/second-video.mp4",
    "/assets/video/third-videe.mp4",
    "/assets/video/second-video.mp4",
  ];
  useEffect(() => {
    const videoTags = document.getElementById("bg-video");
    videoTags.src = videos[presentVideo];
    videoTags.play();

    videoTags.addEventListener("ended", () => {
      setPresentVideo((presentVideo + 1) % videos.length);
      videoTags.src = videos[presentVideo];
      videoTags.play();
    });
  }, [presentVideo]);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div id="home" className="relative z-10">
      <div className="absolute inset-0">
        <video
          id="bg-video"
          muted
          autoPlay
          playsInline
          controls
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1920px] mx-auto min-h-[600px] sm:min-h-screen md:min-h-[810px] 2xl:min-h-screen flex-col flex relative z-10 overflow-hidden">
        <>
          <GaliloeSkyNav />
        </>
        <div
          className={`${
            sidebar ? "max-md:right-0" : ""
          } absolute z-20 max-md:-right-20 duration-300 md:right-0 top-[21%] md:top-[30%] w-20 h-[368px] bg-nav-bg backdrop:blur-[30.92px] flex justify-center py-[70px] px-[22px] flex-col-reverse gap-7 `}
        >
          <span
            className="bg-white absolute top-[30%] -left-[15px] w-[15px] h-[145px] rounded-[30px_0_0_30px]"
            onClick={() => setSidebar(!sidebar)}
          ></span>
          {HeroSocialIconArray.map((obj, index) => (
            <Link
              key={index}
              href="#!"
              onClick={() => setSidebar(!sidebar)}
              className="w-9 h-9 rounded-[36px] flex justify-center items-center group"
            >
              {obj.socialIcon}
            </Link>
          ))}
        </div>
        <div className="max-w-[1164px] container flex-grow flex justify-center items-center flex-col relative">
          <button className="relative z-10 group">
            <Image
              width={240}
              height={43}
              src="/assets/images/webp/futurebtn.webp"
              alt="future"
            />
            <span className=" absolute left-0 right-0 top-[11.49px] font-inter font-medium text-sm text-white-cream-btn duration-300 group-hover:text-red-light uppercase">
              Future of Gaming
            </span>
          </button>
          <h1 className="font-open-sans font-normal text-4xl sm:text-5xl lg:text-7xl xl:text-9xxl text-white-cream-btn !leading-[110%] text-center mt-2.5 ">
            BEYOND <span className="text-red-light">ENTERTAINMENT</span>
          </h1>
          <p className="font-poppins font-normal text-sm md:text-base text-hero-section-gray leading-normal mt-4 max-w-[700px] mx-auto text-center">
            Galileo Sky, founded by industry experts, is redefining the gaming
            landscape. With a blend of groundbreaking technology and immersive
            entertainment, we create world-class gaming experiences and thriving
            digital economies that captivate and inspire
          </p>
          <div className="flex md:flex-col items-center gap-6 h-20 absolute max-md:justify-center md:left-0 max-md:bottom-[20%] md:top-[38%] translate-y-[50%]">
            <span className="w-5 h-2 rounded-[21px] bg-input-gray md:rotate-90"></span>
            <span className="w-5 h-2 rounded-[21px] bg-input-gray md:rotate-90"></span>
            <span className="w-5 h-2 rounded-[21px] bg-red-light md:rotate-90"></span>
          </div>
        </div>
        <div className="relative bottom-11 max-[415px]:translate-x-[40%] translate-x-[43.3%] sm:translate-x-[45%] md:translate-x-[48%]">
          <div
            href="home"
            onClick={handleToggle}
            className="w-[76px] h-[43px] border border-red-light rounded-[55px] rotate-90 relative cursor-pointer transition-colors duration-300 "
          >
            <div
              className={`w-[27px] h-[27px] rounded-full bg-red-light absolute transition-transform duration-300 
            ${isToggled ? "translate-x-[34px]" : "translate-x-2"} mt-[7px]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
