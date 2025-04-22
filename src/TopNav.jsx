import React from "react";
import { GrPhone } from "react-icons/gr";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";

const TopNav = () => {
  return (
    <div className="h-[53px]  px-[36px] bg-[#23856d] flex justify-between items-center font-[M ontserrat] font-bold text-white max-[1024px]:hidden">
      <div className="flex gap-6">
        <div className="flex justify-center items-center gap-2">
          <GrPhone />
          <span>(225) 555-0118</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span>
            <BsEnvelope />
          </span>
          michelle.rivera@example.com
        </div>
      </div>
      <div className="">Follow Us and get a chance to win 80% off</div>
      <div className="flex items-center gap-3">
        <span>Follow Us:</span>
        <span className="flex gap-3">
          <FaInstagram />
          <FaYoutube />
          <MdFacebook />
          <IoLogoTwitter />
        </span>
      </div>
    </div>
  );
};

export default TopNav;
