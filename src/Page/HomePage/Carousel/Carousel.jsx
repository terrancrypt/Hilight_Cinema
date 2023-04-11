import React, { useEffect, useState } from "react";
import { Carousel, message } from "antd";
import { movieService } from "../../../services/movieService";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../../../toolkit/spinnerSlice";

const CarouselHomepage = () => {
  const [banner, setBanner] = useState([]);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingOn());
  }, []);

  useEffect(() => {
    movieService
      .getBannerMovie()
      .then((res) => {
        dispatch(setLoadingOff());
        setBanner(res.data.content);
      })
      .catch((err) => {
        dispatch(setLoadingOff());
        message.error("Can't download data!");
        console.log(err);
      });
  }, []);

  let renderBanner = () => {
    return banner.map((item, index) => {
      return (
        <NavLink to={`/detail/${item.maPhim}`} key={index}>
          <div>
            <img className="h-full w-full" src={item.hinhAnh} />
          </div>
        </NavLink>
      );
    });
  };

  return (
    <div className="w-9/12">
      <Carousel autoplay>{renderBanner()}</Carousel>
    </div>
  );
};

export default CarouselHomepage;
