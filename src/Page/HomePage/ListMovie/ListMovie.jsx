import React, { useEffect, useState } from "react";
import ItemMovie from "./ItemMovie";
import { movieService } from "../../../services/movieService";

function ListMovie() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    movieService
      .getMovieList()
      .then((res) => {
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div id="listmovie">
      <h2 className="text-4xl uppercase font-bold text-center mb-2">
        Hot Movies
      </h2>
      <div className="grid grid-cols-4 gap-10">
        {movies.slice(0, 8).map((item) => {
          return <ItemMovie data={item} key={item.maPhim} />;
        })}
      </div>
    </div>
  );
}

export default ListMovie;
