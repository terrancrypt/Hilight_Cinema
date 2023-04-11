import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useState } from "react";
import { movieService } from "../../../services/movieService";
import ItemCineFlex from "./ItemCineFlex";

const CineFlexTablet = () => {
  const [cineFlex, setCineFlex] = useState([]);
  useEffect(() => {
    movieService
      .getMoviveByTheaters()
      .then((res) => {
        setCineFlex(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="cineplex">
      <h2 className="text-4xl uppercase font-bold text-center mb-2">
        CinePlex
      </h2>
      <div className="bg-white p-5 rounded-lg w-100">
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
                    width: 500,
                  }}
                  className="overflow-x-scroll text-xs"
                  tabPosition="top"
                  items={cineFlex.lstCumRap.map((cinema) => {
                    return {
                      label: cinema.tenCumRap,
                      key: cinema.maCumRap,
                      children: (
                        <div
                          style={{ height: 430 }}
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
    </div>
  );
};

export default CineFlexTablet;