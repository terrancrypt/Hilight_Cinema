import React from "react";
import ListMovie from "./ListMovie/ListMovie";
import CineFlex from "./CineFlex/CineFlex";

function HomePage() {
  return (
    <div className="container space-y-10 flex flex-col items-center">
      <ListMovie/>
      <CineFlex/>
    </div>
  );
}

export default HomePage;
