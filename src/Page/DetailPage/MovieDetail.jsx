import moment from "moment";
import React from "react";

const MovieDetail = ({movie}) => {
  return <>
  <div className="flex justify-start space-x-10">
    <img className="rounded" style={{width: 250}} src={movie.hinhAnh} />
    <div className="flex flex-col justify-between">
      <div className="space-y-2">
      <h2 className="text-3xl font-bold">{movie.tenPhim}</h2>
      <div className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
       <span>{moment(movie.ngayKhoiChieu).format("D/MM/YYYY")}</span>
      </div>
      </div>
      
      <p>{movie.moTa}</p>
      <button className="bg-blue-800 hover:bg-blue-600 hover:text-white text-white rounded-full transition-all mr-1 border-none py-2 px-4">BOOK TICKETS</button>
    </div>
  </div>
</>;
};

export default MovieDetail;
