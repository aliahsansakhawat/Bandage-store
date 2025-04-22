import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { RiHeart3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import MobileMenu from "./assets/Navbar/menu-mobile.png";

// for model
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./Redux/Slices/cartSlice";
import { removeAllItems } from "./Redux/Slices/cartSlice";
import {
  removeAllFromFavourite,
  removeFromFavourite,
} from "./Redux/Slices/addFavouriteSlice";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showFavourite, setShowFavourite] = useState(false);
  // {const { productList } = useSelector((state) => state.products);
  // const { SingleProduct } = useSelector((state) => state.products);
  // console.log("navproducts", productList);
  // console.log("navsingleproducts", SingleProduct);}
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.addToCart);
  const { favouriteItems } = useSelector((state) => state.AddToFavourite);
  console.log("myfvrtdata", favouriteItems);
  console.log(cartItems, "mycart items");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const myHandleClose = () => setShowFavourite(false);
  const myhandleShow = () => setShowFavourite(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleRemoveAll = () => {
    dispatch(removeAllItems());
  };
  const handleRemoveFavourite = (id) => {
    dispatch(removeFromFavourite(id));
  };
  const removeAllFavourites = () => {
    dispatch(removeAllFromFavourite());
  };
  return (
    <>
      <div className="flex justify-between py-[24px] px-[36px] font-[Montserrat] max-[1024px]:hidden ">
        <div className="flex items-center justify-center">
          <div className="text-[24px] cursor-pointer font-bold tracking-[1px]">
            Bandage
          </div>
          <div className="ml-[120px] text-[14px] flex font-bold gap-4  ">
            <a className="text-[#737373]! no-underline! " href="">
              Home
            </a>
            <a className="text-[#737373]! no-underline!" href="">
              Shop
            </a>
            <a className="text-[#737373]! no-underline!" href="">
              About
            </a>
            <a className="text-[#737373]! no-underline!" href="">
              Blog
            </a>
            <a className="text-[#737373]! no-underline!" href="">
              Contact
            </a>
            <a className="text-[#737373]! no-underline!" href="">
              Pages
            </a>
          </div>
        </div>
        <div className="flex items-center  gap-4 text-[15px] font-bold text-[#23a6f0]">
          <div className="flex gap-1.5 items-center">
            <FaRegUser className="cursor-pointer"/>
            Login/Register
          </div>
          <span className="flex items-center gap-4 ">
            <IoIosSearch className="h-[22px] cursor-pointer w-[22px]" />
            <span className="flex items-center justify-center gap-1">
              <SlBasket onClick={handleShow} className="h-[19px] cursor-pointer w-[19px]" />
              <span className="text-[15px]">{cartItems.length}</span>{" "}
            </span>
            <span className="flex justify-center items-center gap-1">
              <RiHeart3Line
                onClick={myhandleShow}
                className="h-[19px] w-[19px] cursor-pointer"
              />
              <span className="text-[15px]">{favouriteItems.length}</span>
            </span>
          </span>
        </div>
      </div>

      {/* Navbar forrmation for the mobile device */}
      <div className="font-[Montserrat] lg:hidden ">
        <div className="py-[36px] px-[35px] flex justify-between ">
          <div className="flex items-center justify-center">
            <span className="text-2xl cursor-pointer font-bold">Bandage</span>
          </div>
          <div className="flex gap-4 items-center text-zinc-800">
            <IoSearch className="text-3xl" />
            <SlBasket onClick={handleShow} className="text-2xl" />
            <RiHeart3Line onClick={myhandleShow} className="text-2xl" />
            <img
              src={MobileMenu}
              onClick={handleToggleMenu}
              className="w-[24px] h-[15px]"
              alt=""
            />
          </div>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col items-center justify-center gap-6 text-[30px] font-normal text-[#737373] my-14">
            <span className="cursor-pointer">Home</span>
            <span className="cursor-pointer">Product</span>
            <span className="cursor-pointer">Pricing</span>
            <span className="cursor-pointer">Contact</span>
          </div>
        )}
      </div>
      <Modal centered size="lg" show={showFavourite} onHide={myHandleClose}>
        <Modal.Header className="flex justify-between">
          <span className="text-[14px] font-bold text-[#737373]">
            Shopping Wishlist
          </span>
          <span
            onClick={() => removeAllFavourites(favouriteItems)}
            className="text-[14px] font-bold cursor-pointer text-[#ff4b4b] underline"
          >
            Remove all
          </span>
        </Modal.Header>
        <Modal.Body className="p-4">
          {favouriteItems.length === 0 ? (
            <div className="text-center"> Wishlist is empty!</div>
          ) : (
            favouriteItems.map((myItems) => (
              <div
                key={myItems.id}
                className="font-[Montserrat] flex justify-between mt-2.5 p-2"
              >
                <img
                  key={myItems.id}
                  src={myItems?.images[0] || myItems?.images[0]}
                  alt=""
                  className="w-[100px] h-[100px] ml-4"
                />
                <div key={myItems.id} className="flex flex-col">
                  <span className="font-bold text-[16px] mt-6">
                    {myItems?.title}
                  </span>
                  <span className="text-[12px] font-normal mt-1">
                    {myItems?.category}
                  </span>
                  <span className="text-[10px] font-normal mt-1">
                    {myItems?.brand}
                  </span>
                </div>
                <div className="flex flex-col mr-3">
                  <span className="font-bold text-[16px] mt-6">
                    ${myItems?.price}
                  </span>
                  {/* <span className="font-normal mt-0.5 text-[13px] text-[#23a6f0]">
                    save for later
                  </span> */}
                  <span
                    key={myItems.id}
                    onClick={() => handleRemoveFavourite(myItems.id)}
                    className="text-[12px] text-[#f16565] underline cursor-pointer font-normal mt-0.5"
                  >
                    Remove
                  </span>
                </div>
              </div>
            ))
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Modal centered size="lg" show={show} onHide={handleClose}>
        <Modal.Header className="flex justify-between">
          <span className="text-[14px] font-bold text-[#737373]">
            Shopping Cart
          </span>
          <span
            onClick={() => handleRemoveAll(cartItems)}
            className="text-[14px] font-bold cursor-pointer text-[#ff4b4b] underline"
          >
            Remove all
          </span>
        </Modal.Header>
        <Modal.Body className="p-4">
          {cartItems.length === 0 ? (
            <div className="text-center"> 🛒 Your cart is empty!</div>
          ) : (
            cartItems.map((myCartItems) => (
              <div
                key={myCartItems.id}
                className="font-[Montserrat] flex justify-between mt-2.5 p-2"
              >
                <img
                  key={myCartItems.id}
                  src={myCartItems?.images[0] || myCartItems?.images[0]}
                  alt=""
                  className="w-[100px] h-[100px] ml-4"
                />
                <div key={myCartItems.id} className="flex flex-col">
                  <span className="font-bold text-[16px] mt-6">
                    {myCartItems?.title}
                  </span>
                  <span className="text-[12px] font-normal mt-1">
                    {myCartItems?.category}
                  </span>
                  <span className="text-[10px] font-normal mt-1">
                    {myCartItems?.brand}
                  </span>
                </div>
                <div className="flex flex-col mr-3">
                  <span className="font-bold text-[16px] mt-6">
                    ${myCartItems?.price}
                  </span>
                  <span className="font-normal mt-0.5 text-[13px] text-[#23a6f0]">
                    save for later
                  </span>
                  <span
                    key={myCartItems.id}
                    onClick={() => handleRemove(myCartItems.id)}
                    className="text-[12px] text-[#f16565] underline cursor-pointer font-normal mt-0.5"
                  >
                    Remove
                  </span>
                </div>
              </div>
            ))
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
