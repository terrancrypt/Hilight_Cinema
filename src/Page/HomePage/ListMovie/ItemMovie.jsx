import React from "react";
import { Card } from "antd";
import { movieService } from "../../../services/movieService";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

function ItemMovie({ data }) {
  return (
    <NavLink to={`/detail/${data.maPhim}`}>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            className="h-60 object-cover object-top"
            alt="example"
            src={data.hinhAnh}
          />
        }
      >
        <Meta title={data.tenPhim} />
      </Card>
    </NavLink>
  );
}

export default ItemMovie;
