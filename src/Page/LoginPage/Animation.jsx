import React from "react";
import { useLottie } from "lottie-react";
import animate from "../../assets/131837-movie-red.json";


const Animate = () => {
  const options = {
    animationData: animate,
    loop: true
  };

  const { View } = useLottie(options);

  return <div className="w-auto">{View}</div>;
};

export default Animate;
