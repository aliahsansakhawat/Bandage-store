import React from "react";
import TopNav from "./TopNav";
import Navbar from "./Navbar";
import Header from "./Header";
import FeaturedMain from "./FeaturedMain";
import Services from "./Services";
import FeaturedPosts from "./FeaturedPosts";
import Reviews from "./Reviews";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <Header />
      <FeaturedMain />
      <Services />
      <FeaturedPosts />
      <Reviews />
      <Footer />
    </>
  );
};

export default HomePage;
