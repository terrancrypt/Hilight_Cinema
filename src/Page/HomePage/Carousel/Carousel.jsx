import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { movieService } from "../../../services/movieService";
import { NavLink } from "react-router-dom";

const CarouselHomepage = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    movieService
      .getBannerMovie()
      .then((res) => {
        setBanner(res.data.content);
      })
      .catch((err) => {
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
      <Carousel autoplay>
        {renderBanner()}
      </Carousel>
    </div>
  );
};

export default CarouselHomepage;
