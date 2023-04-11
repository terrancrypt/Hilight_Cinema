import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import MovieDetail from "./MovieDetail";
import Showtimes from "./Showtimes";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../../toolkit/spinnerSlice";

const DetailPage = () => {
  // Lấy id từ params
  let { id } = useParams();
  // Tạo state chữa dữ liệu lấy về từ API
  const [movie, setMovie] = useState({});

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingOn());
  }, []); 

  // Render dữ liệu lấy từ API sau khi giao diện loading xong
  useEffect(() => {
    // Gọi API lấy dữ liệu từ id đã có
    let fetchDetail = async () => {
      try {
        let result = await movieService.getDetailMovie(id);
        dispatch(setLoadingOff());
        setMovie(result.data.content);
      } catch (error) {
        dispatch(setLoadingOff());
        console.log(error);
      }
    };
    fetchDetail();
  }, []);

  return (
    <div className="container space-y-10">
      <MovieDetail movie={movie} />
      <Showtimes id={id} />
    </div>
  );
};

export default DetailPage;
