import React from "react";
import Post1 from "./assets/Featuredpost/post-1.png";
import Post2 from "./assets/Featuredpost/post-2.png";
import Post3 from "./assets/Featuredpost/post-3.png";
import Timer from "./assets/Featuredpost/timer.png";
import Chart from "./assets/Featuredpost/chart.png";
import Arrow from "./assets/Featuredpost/arrow.png";
const FeaturedPosts = () => {
  return (
    <div className="mx-[80px] my-[180px] max-[1024px]:my-[80px] max-[1024px]:mx-[40px]  font-[Montserrat]">
      <div className="items-center flex flex-col">
        <span className="text-[14px] font-bold text-[#23a6f0]">
          Practice Advice
        </span>
        <span className="text-[40px] font-bold text-[#252b42]">
          Featured Posts
        </span>
      </div>
      <div className="py-[5%] px-[15%] grid grid-cols-3 gap-y-[30px] gap-x-[20px] mt-4 max-[1024px]:grid-cols-1 max-[1024px]:px-[1%]">
        <div className="flex flex-col  justify-center shadow-[0_2px_4px_0_#0000001a]">
          <img src={Post1} alt="" className="w-full h-full" />
          <div className="p-6 flex flex-col mt-2.5">
            <div className="flex gap-3.5">
              <span className="text-xs font-normal text-[#8EC2F2]">Google</span>
              <span className="text-xs font-normal">Trending</span>
              <span className="text-xs font-normal">New</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-normal text-[#252b42]">
                Loudest à la Madison #1 (integral)
              </span>
              <span className="text-sm font-normal text-[#737373] mt-[10px]">
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </span>
              <div className="flex justify-between mt-6">
                <div className="flex gap-1 items-center">
                  <img src={Timer} alt="" className="w-[16px] h-[16px]" />
                  <span className="font-light text-[12px]">22 April 2023</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={Chart} alt="" className="w-[16px] h-[16px]" />
                  <span className="font-light text-[12px]">22 April 2023</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm font-bold text-[#737373]">
                  Learn More
                </span>
                <img
                  src={Arrow}
                  className="w-[9px] h-[16px] text-transparent mt-0.5"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center shadow-[0_2px_4px_0_#0000001a]">
          <img src={Post2} alt="" className="w-full h-full" />
          <div className="p-6 flex flex-col mt-2.5">
            <div className="flex gap-3.5">
              <span className="text-xs font-normal text-[#8EC2F2]">Google</span>
              <span className="text-xs font-normal">Trending</span>
              <span className="text-xs font-normal">New</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-normal text-[#252b42]">
                Loudest à la Madison #1 (integral)
              </span>
              <span className="text-sm font-normal text-[#737373] mt-[10px]">
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </span>
              <div className="flex justify-between mt-6">
                <div className="flex gap-1 items-center">
                  <img src={Timer} alt="" className="w-[16px] h-[16px]" />
                  <span className="font-light text-[12px]">22 April 2023</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={Chart} alt="" className="w-[16px] h-[16px]" />
                  <span className="font-light text-[12px]">22 April 2023</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm font-bold text-[#737373]">
                  Learn More
                </span>
                <img
                  src={Arrow}
                  className="w-[9px] h-[16px] text-transparent mt-0.5"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center shadow-[0_2px_4px_0_#0000001a]">
          <img src={Post3} alt="" className="w-full h-full" />
          <div className="p-6 flex flex-col mt-2.5">
            <div className="flex gap-3.5">
              <span className="text-xs font-normal text-[#8EC2F2]">Google</span>
              <span className="text-xs font-normal">Trending</span>
              <span className="text-xs font-normal">New</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-normal text-[#252b42]">
                Loudest à la Madison #1 (integral)
              </span>
              <span className="text-sm font-normal text-[#737373] mt-[10px]">
                We focus on ergonomics and meeting you where you work. Its only
                a keystroke away.
              </span>
              <div className="flex justify-between mt-6">
                <div className="flex gap-1 items-center">
                  <img src={Timer} alt="" className="w-[16px] h-[16px]" />
                  <span className="font-light text-[12px]">22 April 2023</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={Chart} alt="" className="w-[16px] h-[16px]" />
                  <span className="font-light text-[12px]">22 April 2023</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm font-bold text-[#737373]">
                  Learn More
                </span>
                <img
                  src={Arrow}
                  className="w-[9px] h-[16px] text-transparent mt-0.5"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FeaturedPosts;
