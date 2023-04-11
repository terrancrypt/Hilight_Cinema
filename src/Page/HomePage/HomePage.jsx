import React from "react";
import ListMovie from "./ListMovie/ListMovie";
import CineFlex from "./CineFlex/CineFlex";
import CarouselHomepage from "./Carousel/Carousel";

function HomePage() {
  return (
    <div className="space-y-10 flex flex-col items-center">
      <CarouselHomepage/>
      <ListMovie/>
      <CineFlex/>
    </div>
  );
}

export default HomePage;
