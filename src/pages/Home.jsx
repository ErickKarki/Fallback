import React from "react";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />

      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
