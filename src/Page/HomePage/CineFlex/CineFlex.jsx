import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useState } from "react";
import { movieService } from "../../../services/movieService";
import ItemCineFlex from "./ItemCineFlex";

const CineFlex = () => {
  const [cineFlex, setCineFlex] = useState([]);
  useEffect(() => {
    movieService
      .getMoviveByTheaters()
      .then((res) => {
        console.log(res);
        setCineFlex(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="#cineFlex" className="bg-white p-5 rounded-lg w-100">
      <Tabs
        style={{
          height: 500,
        }}
        tabPosition="left"
        items={cineFlex.map((cineFlex) => {
          return {
            label: <img className="h-16" src={cineFlex.logo} />,
            key: cineFlex.maHeThongRap,
            children: (
              <Tabs
                style={{
                  height: 500,
                }}
                tabPosition="left"
                items={cineFlex.lstCumRap.map((cinema) => {
                  return {
                    label: cinema.tenCumRap,
                    key: cinema.maCumRap,
                    children: (
                      <div
                        style={{ height: 500 }}
                        className="overflow-y-scroll"
                      >
                        {cinema.danhSachPhim.map((item) => {
                          return (
                            <div className="mb-5">
                              <ItemCineFlex data={item} />
                            </div>
                          );
                        })}
                      </div>
                    ),
                  };
                })}
              />
            ),
          };
        })}
      />
    </div>
  );
};

export default CineFlex;
