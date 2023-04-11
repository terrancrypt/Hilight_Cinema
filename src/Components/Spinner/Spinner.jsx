import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

const Spinner = () => {
  let { isLoading } = useSelector((state) => state.spinnerSlice);
  return isLoading ? (
    <div
      style={{ zIndex: "999" }}
      className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-black opacity-95"
    >
      <RingLoader color="white" size="120"/>
    </div>
  ) : (
    <></>
  );
};

export default Spinner;
