import React from "react";
import imageOne from "./assets/Header/image-1.png";
import imageTwo from "./assets/Header/image-2.png";
import imageThree from "./assets/Header/image-3.png";
import imageFour from "./assets/Header/image-4.png";

const Header = () => {
  return (
    <div className="m-[84px] mx-[147px] flex justify-center gap-3 max-[1024px]:my-[24px] max-[1024px]:mx-[41px] max-[1024px]:flex max-[1024px]:flex-col">
      <div className="">
        <img src={imageOne} className="text-transparent w-full h-full" alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <img src={imageTwo} className="w-[100%]  h-full" alt="" />
        </div>
        <div className="flex gap-3  max-[1024px]:flex-col">
          <img
            src={imageThree}
            className="w-[48.7%] max-[1024px]:w-full h-full"
            alt=""
          />
          <img
            src={imageFour}
            className="w-[48.7%] max-[1024px]:w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
