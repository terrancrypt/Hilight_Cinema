import axios from "axios";
import { BASE_URL, configHeaders } from "./config";

export const userService = {
  postLogin: (loginForm) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: loginForm,
      headers: configHeaders(),
    });
  },
};
