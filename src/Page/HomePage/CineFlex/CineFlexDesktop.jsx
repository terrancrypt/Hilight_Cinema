import React, { useEffect } from "react";
import { Tabs, message } from "antd";
import { useState } from "react";
import { movieService } from "../../../services/movieService";
import ItemCineFlex from "./ItemCineFlex";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../../../toolkit/spinnerSlice";

const CineFlexDesktop = () => {
  const [cineFlex, setCineFlex] = useState([]);

  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setLoadingOn());
  }, []);

  useEffect(() => {
    movieService
      .getMoviveByTheaters()
      .then((res) => {
        dispatch(setLoadingOff());
        setCineFlex(res.data.content);
      })
      .catch((err) => {
        dispatch(setLoadingOff());
        message.error("Can't download data!")
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
                          {cinema.danhSachPhim.map((item, index) => {
                            return (
                              <div className="mb-5">
                                <ItemCineFlex data={item} key={index} />
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

export default CineFlexDesktop;
