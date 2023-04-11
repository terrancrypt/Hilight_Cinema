import React, { useEffect, useState } from "react";
import ItemMovie from "./ItemMovie";
import { movieService } from "../../../services/movieService";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../../../toolkit/spinnerSlice";

function ListMovie() {
  const [movies, setMovie] = useState([]);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingOn());
  }, []);

  useEffect(() => {
    movieService
      .getMovieList()
      .then((res) => {
        dispatch(setLoadingOff());
        setMovie(res.data.content);
      })
      .catch((err) => {
        dispatch(setLoadingOff());
        console.log(err);
      });
  });
  return (
    <div id="listmovie" className="container">
      <h2 className="text-3xl sm:text-4xl uppercase font-bold text-center mb-4">
        Hot Movies
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies.slice(0, 8).map((item) => {
          return <ItemMovie data={item} key={item.maPhim} />;
        })}
      </div>
    </div>
  );
}

export default ListMovie;
