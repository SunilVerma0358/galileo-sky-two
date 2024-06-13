"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { LinkArray, SocialIconArray } from "./common/Helper";
const Footer = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="max-w-[1164px] container  pt-[84px] pb-[50px]">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className=" w-full lg:w-1/2 px-3">
            <Link href="#!" className="max-w-[289px]">
              <Image
                className="w-full max-sm:max-w-[240px] max-w-[289px]"
                width={289}
                height={53}
                src="/assets/images/webp/footer-logo.webp"
                alt="logo"
              />
            </Link>
            <p className="font-poppins font-normal text-sm md:text-base text-dark-gray leading-normal mt-4 max-w-[406px]">
              Galileo Sky, founded by industry experts, is redefining the gaming
              landscape. With a blend of groundbreaking technology and immersive
              entertainment, we create world-class gaming experiences and
              thriving digital economies that captivate and inspire
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-6">
              {SocialIconArray.map((obj, index) => (
                <Link
                  key={index}
                  href="#!"
                  className="w-9 h-9 rounded-[36px] border border-red-dark flex justify-center items-center"
                >
                  {obj.socialIcon}
                </Link>
              ))}
            </div>
          </div>
          <div className=" w-full lg:w-1/2 px-3 max-lg:pt-6">
            <div className="flex max-md:flex-wrap justify-between">
              <div className="max-sm:w-full max-lg:w-1/2">
                <p className="font-poppins font-normal text-sm md:text-base text-black-dark leading-normal">
                  Quick Links
                </p>
                <ul>
                  {LinkArray.map((obj, index) => (
                    <li key={index} className="mt-2 md:mt-3">
                      <Link
                        href="#!"
                        className="font-poppins font-normal text-sm md:text-base text-dark-gray leading-normal"
                      >
                        {obj.Link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="max-sm:w-full max-sm:pt-6 max-lg:w-1/2">
                {" "}
                <p className="font-poppins font-normal text-sm md:text-base text-black-dark leading-normal">
                  Get Connected
                </p>
                <div className="rounded-[10px] bg-input-gray p-[7px] mt-4 max-w-[347px] flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Email Here"
                    className="bg-transparent ps-[14px] w-full placeholder:text-dark-gray placeholder:font-poppins outline-none"
                  />
                  <button className=" font-poppins font-normal text-white-cream-btn text-sm md:text-base leading-normal rounded-lg bg-red-dark p-[14px_32px_14px_32px]">
                    Submit
                  </button>
                </div>
                <p className="font-poppins font-normal text-sm md:text-base text-black-dark leading-normal max-w-[306px] mt-4">
                  Your email address is very safe with Galileo Sky. You will
                  only receive our gaming updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-t-border-color-gray ">
        <p className="font-poppins font-normal text-sm md:text-base text-dark-gray leading-normal text-center my-6">
          {new Date().getFullYear()} Copyrights Galileo Sky, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
