import React from "react";
import { Card } from "antd";
import moment from "moment";

const ItemShowtimes = ({ data }) => {
  return (
    <div className="pr-6">
      <Card>
        <div className="flex space-x-3 justify-start items-center">
          <img className="w-16 rounded-full" src={data.hinhAnh} />
          <div>
            <h3 className="text-2xl font-semibold">{data.tenCumRap}</h3>
            <span>Address: {data.diaChi}</span>
          </div>
        </div>
        <div className="flex mt-3">
            {data.lichChieuPhim.map((item) => {
              return <Card className="shadow hover:shadow-none transition-all cursor-pointer">
                <span>{moment(item.ngayChieuGioChieu).format("DD/MM/YYYY ~ hh:mm")} </span>
              </Card>;
            })}
          </div>
      </Card>
    </div>
  );
};

export default ItemShowtimes;
