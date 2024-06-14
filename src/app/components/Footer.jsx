"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { LinkArray, SocialIconArray } from "./common/Helper";
const Footer = () => {
  const [inputData, setInputData] = useState({ Email: "" });
  const [formError, setFormError] = useState({ Email: "" });
  const [success, setSuccess] = useState(false);

  const inputControl = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    const error = {};
    const regex = {
      Email: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
    };

    if (!regex.Email.test(inputData.Email)) {
      error.Email = "Email is invalid";
    }

    setFormError(error);

    if (Object.keys(error).length === 0) {
      setSuccess(true);

      setInputData({
        Email: "",
      });
      setFormError({
        Email: "",
      });
    }
  };
  useEffect(() => {
    if (success) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [success]);

  const handlePopupClose = () => {
    setSuccess(false);
  };
  return (
    <div id="footer" className="max-w-[1920px] mx-auto">
      <div className="max-w-[1164px] container  pt-12 md:pt-[80px] pb-8 md:pb-[45px]">
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
                  href={obj.href || "#"}
                  target="blank"
                  className="w-7 sm:w-9 h-7 sm:h-9 rounded-[36px] border border-red-dark flex justify-center items-center group hover:border-dark-gray duration-300"
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
                        href="#"
                        className="font-poppins font-normal text-sm md:text-base text-dark-gray leading-normal duration-300 hover:text-red-dark"
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
                <form onSubmit={handleSubmit}>
                  <div className="rounded-[10px] bg-input-gray p-[7px] mt-4 max-w-[347px] flex items-center gap-2">
                    <input
                      type="email"
                      name="Email"
                      value={inputData.Email}
                      onChange={inputControl}
                      placeholder="Email Here"
                      className="bg-transparent ps-[14px] w-full placeholder:text-dark-gray placeholder:font-poppins outline-none"
                    />
                    <button
                      type="submit"
                      className=" font-poppins font-normal text-white-cream-btn text-sm md:text-base leading-normal rounded-lg bg-red-dark p-[14px_32px_14px_32px] hover:text-black-dark hover:bg-white-cream-btn border duration-300 border-transparent hover:border-black-dark"
                    >
                      Submit
                    </button>
                  </div>
                  {formError.Email && (
                    <span className="text-red-dark font-poppins font-normal text-sm md:text-base mt-1">
                      {formError.Email}
                    </span>
                  )}
                </form>
                {success && (
                  <>
                    <div
                      onClick={handlePopupClose}
                      className="fixed inset-0 bg-black-dark bg-opacity-50 z-10"
                    ></div>
                    <div className="bg-white w-[400px] h-[100px] flex-col flex justify-center items-center px-4 py-3 rounded-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] z-20">
                      <p className="text-black-dark font-semibold text-center">
                        Form submitted successfully
                      </p>
                      <div className="flex items-center justify-center pt-5">
                        <button
                          onClick={handlePopupClose}
                          className="bg-red-dark text-white rounded-lg px-3 py-2"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                )}
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
        <p className="font-poppins font-normal text-sm md:text-base text-dark-gray leading-normal text-center my-4 sm:my-6">
          {new Date().getFullYear()} Copyrights Galileo Sky, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
