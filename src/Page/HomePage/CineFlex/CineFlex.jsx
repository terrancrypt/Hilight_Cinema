import React from "react";
import CineFlexDesktop from "./CineFlexDesktop";
import { Default, Desktop, Mobile, SmallMobile, SmallTablet, Tablet } from "../../../Layouts/Responsive";
import CineFlexDefault from "./CineFlexDefault";

const CineFlex = () => {
  return (
    <div className="container">
      <Desktop>
       <CineFlexDesktop/>
      </Desktop>
      <Default>
        <CineFlexDefault/>
      </Default>
    </div>
  );
};

export default CineFlex;
