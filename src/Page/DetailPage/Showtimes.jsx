import { Radio, Space, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import ItemShowtimes from "./ItemShowtimes";

const Showtimes = ({ id }) => {
  const [showtime, setShowTime] = useState([]);
  // Gọi API lấy thông tin lịch chiếu phim
  useEffect(() => {
    let fetchShowtime = async () => {
      try {
        let result = await movieService.getShowtime(id);
        setShowTime(result.data.content.heThongRapChieu);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShowtime();
  }, []);
  return (
    <div>
      <h2 className="font-bold text-xl">Showtimes</h2>
      <div className="bg-white py-10 rounded">
        <Tabs
        style={{
          height: 500,
        }}
          tabPosition="left"
          items={showtime.map((item) => {
            return {
              label: <img className="h-16" src={item.logo} />,
              key: item.maHeThongRap,
              children: (
               <div style={{ height: 500 }}
               className="overflow-y-scroll space-y-3">
                {item.cumRapChieu.map((cumRap)=>{
                  return <ItemShowtimes data={cumRap}/>
                })}
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
};

export default Showtimes;
