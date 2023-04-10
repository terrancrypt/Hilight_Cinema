import React from "react";
import CineFlexDesktop from "./CineFlexDesktop";
import { Desktop, Mobile, SmallMobile, SmallTablet, Tablet } from "../../../Layouts/Responsive";
import CineFlexTablet from "./CineFlexTablet";
import CineFlexSmallTablet from "./CineFlexSmallTablet";
import CineFlexMobile from "./CineFlexMobile";
import CineFlexSmallMobile from "./CineFlexSmallMobile";

const CineFlex = () => {
  return (
    <>
      <Desktop>
       <CineFlexDesktop/>
      </Desktop>
      <Tablet>
      <CineFlexTablet/>
      </Tablet>
      <SmallTablet>
        <CineFlexSmallTablet/>
      </SmallTablet>
      <Mobile>
        <CineFlexMobile/>
      </Mobile>
      <SmallMobile>
        <CineFlexSmallMobile/>
      </SmallMobile>
    </>
  );
};

export default CineFlex;
