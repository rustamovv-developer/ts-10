import React, { memo } from "react";
import SwiperWrapper from "../../components/swiper";
import Products from "../../components/products";

const Home = () => {
  return (
    <main className="home" id="home">
      <SwiperWrapper />
      <Products />
    </main>
  );
};

export default memo(Home);
