import { BASE_URL, https } from "./config";

export const movieService = {
  getMovieList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00");
  },
  getMoviveByTheaters: () => {
    return https.get(
      `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`
    );
  },
  getDetailMovie: (maPhim) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
};
