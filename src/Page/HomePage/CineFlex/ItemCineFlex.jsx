import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

const ItemCineFlex = ({ data }) => {
  return (
    <NavLink to={`/detail/${data.maPhim}`}>
      <div className="p-5 flex justify-start space-x-10 cursor-pointer">
        <img
          src={data.hinhAnh}
          className="h-32 w-32 object-cover object-top"
          alt=""
        />
        <div>
          <h3 className="font-medium text-lg mb-2">{data.tenPhim}</h3>
          <div className="grid grid-cols-3 gap-5">
            {data.lstLichChieuTheoPhim.slice(0, 9).map((item) => {
              return (
                <span className="rounded p-2 bg-red-500 text-white font-medium">
                  {moment(item.ngayChieuGioChieu).format("DD/MM/YYYY ~ hh:mm")}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ItemCineFlex;
