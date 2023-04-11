import React from "react";
import { Card } from "antd";
import moment from "moment";

const ItemShowtimes = ({ data }) => {
  return (
    <div className="pr-6">
      <Card>
        <div className="flex-col sm:flex-row flex space-y-2 space-x-3 justify-start items-center">
          <img className="w-16 rounded-full" src={data.hinhAnh} />
          <div>
            <h3 className="text-base sm:text-2xl font-semibold">{data.tenCumRap}</h3>
            <span className="text-xs sm:text-sm">Address: {data.diaChi}</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {data.lichChieuPhim.map((item) => {
              return <Card className="text-xs sm:text-sm shadow hover:shadow-none transition-all cursor-pointer">
                <span>{moment(item.ngayChieuGioChieu).format("DD/MM/YYYY ~ hh:mm")} </span>
              </Card>;
            })}
          </div>
      </Card>
    </div>
  );
};

export default ItemShowtimes;
