import React, { useEffect, useState } from "react";
import { fetchApi } from "./Redux/Slices/sliceApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
  
const FeaturedChild = () => {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(10); // Start with 10 products

  const { productList, isLoading } = useSelector((state) => state.products);
  // console.log("ProductListssss ", productList);
  console.log("isLoading", isLoading);
  const fectchData = () => {
    dispatch(fetchApi());
  };
  useEffect(() => {
    fectchData();
  }, []);
  const navigate = useNavigate();
  const handleNavigate = (data) => {
    if (data) {
      navigate(`shop/${data.id}`);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10); // Show 10 more products
  };
  return (
    <>
      {isLoading ? (
        <RingLoader color="#36d7b7" size={150} />
      ) : (
        <>
          <div className="grid grid-cols-5 gap-x-[10px] gap-y-[30px] mt-[15px] py-[3%] font-[Montserrat] px-[15%] max-[1024px]:grid-cols-1">
            {productList.products?.slice(0, visibleCount).map((data, index) => (
              <div
                onClick={() => handleNavigate(data)}
                className="flex flex-col items-center justify-between cursor-pointer"
                key={index}
              >
                <img
                  src={data.images[0] || data.images[1]}
                  className="w-full h-[238px] shadow-neutral-400"
                  alt=""
                />
                <span className="text-[16px] font-bold mt-6 text-center">
                  {data.title}
                </span>
                <span className="text-[16px] font-bold mt-6 text-[#737373]">
                  {data.category}
                </span>
                <div className="mt-4 flex gap-2 mb-4">
                  <span className="font-bold text-[16px] text-[#737373]">
                    {data.discountPercentage}{" "}
                  </span>
                  <span className="text-[16px] font-bold text-[#23856d]">
                    ${data.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < productList.products?.length && (
            <div className="flex items-center justify-center">
              <button
                onClick={handleLoadMore}
                className="py-1.5 px-4 -all duration-[250ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)] border border-[rgba(25,_118,_210,_0.5)]
text-center cursor-pointer font-medium leading-[1.7] min-w-[65px] text-[rgb(25,_118,_210)]"
              >
                LOAD MORE PRODUCTS
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default FeaturedChild;
