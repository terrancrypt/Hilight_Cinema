import { Button } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { localUserService } from "../../services/localUserService";

const UserMenu = () => {
  let userInfor = useSelector((state) => {
    return state.userSlice.userInfor;
  });

  // Đăng xuất
  let handleLogout = () => {
    localUserService.remove();
    window.location.reload();
  };

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  let renderContent = () => {
    if (userInfor) {
      const items = [
        {
          label: userInfor.hoTen,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          ),
          children: [
            {
              label: "Option",
              key: "setting:1",
            },
            {
              label: (
                <>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ),
              key: "setting:2",
            },
          ],
        },
      ];
      return (
        <>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            items={items}
          />
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/login">
            <button className="bg-blue-800 hover:bg-blue-600 text-white text-xs py-1 px-4 rounded-full transition-all mr-1">
              Login
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="bg-blue-800 hover:bg-blue-600 text-white text-xs py-1 px-4 rounded-full transition-all">
              Register
            </button>
          </NavLink>
        </>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default UserMenu;
