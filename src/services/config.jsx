import axios from "axios";
import { localUserService } from "./localUserService";

// Const
export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const TokenCyberSoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MCIsIkhldEhhblN0cmluZyI6IjEwLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDMwNDAwMDAwMCIsIm5iZiI6MTY2NTY4MDQwMCwiZXhwIjoxNjk0NDUxNjAwfQ.sBqNvFEzAEqAZuxinnH_gzedfmLxPTf7WONjIlV-Q7U";
export const configHeaders = () => {
  return {
    TokenCyberSoft: TokenCyberSoft,
    Authorization: "bearer " + localUserService.get()?.accessToken,
    // optional chaining
  };
};

// Tạo Axios Instance tên là https => trả về object
export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaders(),
});
