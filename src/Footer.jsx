import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-[Montserrat] ">
      <div className="flex items-center justify-between px-[192px] py-12 bg-[#fafafa] border-b border-b-[#e6e6e6] max-[1024px]:px-10 max-[1024px]:flex-col max-[1024px]:items-start">
        <span className="text-[22px] cursor-pointer font-bold text-gray-900">
          Bandage
        </span>
        <div className="flex text-[#23a6f0] gap-6 max-[1000px]:gap-4 max-[1000px]:mt-7">
          <span>
            <FaInstagram className="text-[24px]" />
          </span>
          <span>
            <FaFacebook className="text-[24px]" />
          </span>
          <span>
            <FaTwitter className="text-[24px]" />
          </span>
        </div>
      </div>
      {/* --------------------for footer formation------------ */}
      <div className="px-[192px] py-12 flex justify-between items-center max-[1024px]:flex-col max-[1000px]:items-start max-[1024px]:px-10 max-[1024px]:gap-3">
        <div className="text-[13px] font-bold text-[#737373]">
          <span className="text-[#252b42] text-[14px] ">
            <p className="mb-6">Company Info </p>
          </span>
          <div className="my-2.5 gap-2 flex flex-col">
            <span>About Us</span>
            <span>Carrier</span>
            <span>We are hiring</span>
            <span>Blog</span>
          </div>
        </div>
        <div className="text-[13px] font-bold text-[#737373]">
          <span className="text-[#252b42] text-[14px] ">
            <p className="mb-6">Leagel </p>
          </span>
          <div className="my-2 gap-2.5 flex flex-col">
            <span>About Us</span>
            <span>Carrier</span>
            <span>We are hiring</span>
            <span>Blog</span>
          </div>
        </div>
        <div className="text-[13px] font-bold text-[#737373]">
          <span className="text-[#252b42] text-[14px] ">
            <p className="mb-6">Features</p>
          </span>
          <div className="my-2.5 gap-2 flex flex-col">
            <span>About Us</span>
            <span>Carrier</span>
            <span>We are hiring</span>
            <span>Blog</span>
          </div>
        </div>
        <div className="text-[13px] font-bold text-[#737373]">
          <span className="text-[#252b42] text-[14px] ">
            <p className="mb-6">Resources </p>
          </span>
          <div className="my-2.5 gap-2 flex flex-col">
            <span>About Us</span>
            <span>Carrier</span>
            <span>We are hiring</span>
            <span>Blog</span>
          </div>
        </div>
        <div>
          <span className="text-[#252b42] text-[14px]  font-bold">
            <p className="">Get In Touch </p>
          </span>
          <div className="mt-[20px] flex">
            <input
              type="text"
              placeholder="Your Email"
              className="bg-[#F9F9F9] rounded border border-gray-400 pl-2.5 w-full "
            />
            <button className="bg-[#23A6F0] text-white py-2 px-1.5 rounded-lg hover:shadow-lg ">
              SUBSCRIBE
            </button>
          </div>
          <span className="text-xs font-normal text-[#737373]">
            Lore imp sum dolor Amit
          </span>
        </div>
      </div>
      {/* for footer banner */}
      <div className="py-[25px] px-[192px] bg-[#fafafa] max-[1024px]:text-center max-[1024px]:px-0">
        <span className="text-sm font-bold text-[#737373]">
          Made With Love By Finland All Right Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
