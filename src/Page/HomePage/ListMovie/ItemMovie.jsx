import React from "react";
import { Card } from "antd";
import { movieService } from "../../../services/movieService";
const { Meta } = Card;

function ItemMovie({data}) {
  return (
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
      <Meta title={data.tenPhim}/>
    </Card>
  );
}

export default ItemMovie;
