import React, { useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { RiStarSLine } from "react-icons/ri";
import { useState } from "react";
import Circle from "@uiw/react-color-circle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import FeaturedChild from "./FeaturedChild";
import Footer from "./Footer";
import aws from "./assets/Footer/aws.png";
import discord from "./assets/Footer/discord.png";
import hooli from "./assets/Footer/hooli.png";
import lyat from "./assets/Footer/lyat.png";
import ship from "./assets/Footer/ship.png";
import stripe from "./assets/Footer/stripe.png";
import TopNav from "./TopNav";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { fetchProductById } from "./Redux/Slices/sliceApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Redux/Slices/cartSlice";
import { addToFavourite } from "./Redux/Slices/addFavouriteSlice";
import toast, { Toaster } from "react-hot-toast";
import ProductDeatilimg from "./assets/Navbar/product-detail-img.png";
import { fetchApi } from "./Redux/Slices/sliceApi";
import Rating from "@mui/material/Rating";

const Shop = () => {
  const [hex, setHex] = useState("#F44E3B");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productList, isLoading } = useSelector((state) => state.products);
  console.log("productList", productList);
  const { SingleProduct } = useSelector((state) => state.products);

  const images =
    SingleProduct?.images?.map((img) => ({
      original: img,
      thumbnail: img,
    })) || [];

  // const fectchData = () => {
  //   dispatch(fetchApi());
  // };
  // useEffect(() => {
  //   fectchData();
  // }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const notify = () =>
    toast("Added to favourite", {
      icon: "👏",
      style: {
        borderRadius: "4px",
        background: "#333",
        color: "#fff",
        padding: "10px 45px",
        marginBottom: "15px",
        textAlign: "left",
      },
    });
  const notifyCart = () =>
    toast("Added to Cart", {
      icon: "👏",
      style: {
        borderRadius: "4px",
        background: "#333",
        color: "#fff",
        padding: "10px 45px",
        marginBottom: "15px",
        textAlign: "left",
      },
    });

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart(SingleProduct));
    notifyCart();
  };
  
  const handleAddToFavourite = () => {
    dispatch(addToFavourite(SingleProduct));
    notify();
  };
  console.log(SingleProduct, "SingleProduct...");
  console.log(id, "id...");

  return (
    <>
      <TopNav />
      <Navbar />
      <div className="bg-[#fafafa] px-[204px] py-[34px] font-[Montserrat] max-[1024px]:px-0">
        <div className="text-[16px] flex items-center font-[Montserrat] font-medium text-gray-700 gap-4 max-[1000px]:p-[33px]">
          <span>Home</span>
          <span>
            <MdArrowForwardIos />
          </span>
          <span>Shop</span>
        </div>
        {/* for product description and product---- */}

        {isLoading ? (
          "Loading"
        ) : (
          <div className="mt-8 flex justify-center items-center  max-[1024px]:flex-col ">
            <div>
              <ImageGallery
                items={images}
                className="w-[55%] image-gallery-image"
                showFullscreenButton={false}
                pause={false}
                showPlayButton={false}
              />
            </div>
            <div className="ml-[45px] w-[45%] max-[1024px]:mt-6 max-[1024px]:w-full">
              <span className="text-[20px] font-normal text-[#252b42]">
                {SingleProduct?.title}{" "}
              </span>
              <div className="flex gap-2 my-4 items-center">
                <span className="flex text-[23px] text-gray-400">
                  <Stack spacing={1}>
                    <Rating
                      name="size-large"
                      defaultValue={SingleProduct?.rating}
                      size="large"
                    />
                  </Stack>
                </span>
                <span className="text-[14px] text-[#737373] font-bold">
                  10 Reviews
                </span>
              </div>
              <span className="text-[24px] font-bold mt-[20px] flex flex-col text-[#252b42]">
                ${SingleProduct?.price}/
                <span className="text-[15px] text-[#737373]">
                  {" "}
                  Discount : {SingleProduct?.discountPercentage}% OFF
                </span>
              </span>
              {/* <span className="text-[24px] font-bold mt-[20px] text-[#252b42]">
              </span> */}
              <div className="text-[14px] font-bold flex items-center">
                <span className="text-[#737373]">Availability :</span>
                <span className="text-[#23a6f0] ml-2">
                  In Stock({SingleProduct?.stock})
                </span>
              </div>
              <div className="mt-[120px] max-[1024px]:mt-4">
                <hr className="my-4 border-1 border-t opacity-25" />
                <Circle
                  colors={["#0d6efd", "#2DC071", "#E77C40", "#252B42"]}
                  className="gap-2"
                  color={hex}
                  onChange={(color) => {
                    setHex(color.hex);
                  }}
                />
                <div className="pt-[67px]">
                  <div className="flex  items-center gap-3">
                    <Stack spacing={2} direction="row">
                      <Button
                        variant="contained"
                        sx={{ background: "#23A6F0" }}
                      >
                        Select Options
                      </Button>
                    </Stack>
                    <div
                      onClick={handleAddToFavourite}
                      className="p-[12px] border border-[#e8e8e8] rounded-[45px] h-[44px] w-[44px] flex items-center cursor-pointer justify-center"
                    >
                      <FaRegHeart className="text-[25px] text-[#5E6374]" />
                      <Toaster
                        position="bottom-right"
                        className="bg-black"
                        reverseOrder={false}
                      />
                    </div>
                    <div
                      onClick={handleAddToCart}
                      className="p-[12px] justify-center border border-[#e8e8e8] rounded-[45px] h-[44px] w-[44px] flex items-center cursor-pointer"
                    >
                      {/* addToCart icon use to dispatch data */}
                      <SlBasket className="text-[25px] text-[#5E6374]" />
                    </div>
                    <div className="p-[12px] justify-center border border-[#e8e8e8] rounded-[45px] h-[44px] w-[44px] flex items-center cursor-pointer">
                      <FaEye className="text-[25px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="py-20px px-[180px]">
        <div className="flex items-center gap-8 justify-center p-6 text-sm font-semibold text-[#737373] font-[Montserrat]">
          <span>Description</span>
          <span>Additional Information</span>
          <span>Reviews (0)</span>
        </div>
        <hr className="my-4 border-1 border-t  opacity-25 " />
        <div className="flex justify-around mt-10 mb-5 max-[1000px]:hidden">
          <div className="flex flex-col w-[513px]">
            <span className="text-xl font-bold text-[#252b42]">
              the quick fox jumps over
            </span>
            <span className="text-sm font-normal mt-8 text-[#737373]">
              The Essence Mascara Lash Princess is a popular mascara known for
              its volumizing and lengthening effects. Achieve dramatic lashes
              with this long-lasting and cruelty-free formula.
            </span>
            <span className="text-sm font-normal mt-8 text-[#737373] border-l-[3px] border-[#23856D] pl-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </span>
            <span className="text-sm font-normal mt-8 text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </span>
          </div>
          <div>
            <img src={ProductDeatilimg} className="w-[93%]" alt="" />
          </div>
        </div>
      </div>

      <div className="mx-20 max-[1024px]:mx-auto max-[1024px]:my-[110px] font-[Montserrat] bg-[#FAFAFA] flex flex-col items-center max-[1024px]:hidden">
        <span className="text-[22px] font-bold my-7 bg-[#FAFAFA]">
          BESTSELLER PRODUCTS
        </span>
      </div>
      <div className="bg-[#FAFAFA] max-[1024px]:hidden ">
        {/* <FeaturedChild /> */}
        <div className="grid grid-cols-5 gap-x-[10px] gap-y-[30px] mt-[15px] py-[3%] font-[Montserrat] px-[15%] max-[1024px]:grid-cols-1">
          {productList?.products?.slice(0, 10).map((data) => (
            <div
              className="flex flex-col items-center justify-between cursor-pointer"
              key={data.id}
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
                  {data?.discountPercentage}{" "}
                </span>
                <span className="text-[16px] font-bold text-[#23856d]">
                  ${data?.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-around items-center bg-[#fafafa] py-[70px] px-[150px] max-[1024px]:flex-col mx-auto gap-10 max-[1024px]:items-center">
          <img src={hooli} className="w-[103px] h-[35px]" alt="" />
          <img src={lyat} alt="" className="w-[83px] h-[59px]" />
          <img src={ship} alt="" className="w-[103px] h-[75px]" />
          <img src={stripe} alt="" className="w-[103px] h-[42px]" />
          <img src={aws} alt="" className="w-[104px] h-[62px]" />
          <img src={discord} alt="" className="w-[76px] h-[72px]" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
