import React from "react";
import { useLottie } from "lottie-react";
import animation from "../../assets/98642-error-404.json";

const NotFoundPage = () => {
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="text-center flex justify-center items-center">
      <div>
        <span className="text-sm sm:text-xl" >The page you're looking for doesn't exist!</span>
        {View}
      </div>
    </div>
  );
};

export default NotFoundPage;
