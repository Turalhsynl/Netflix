import React from "react";
import Card from "../../../assets/common/Card";
 
const Movies = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-40 m-18">
      {data ? (
        data.map((movie, index) => (
          <div key={index}>
            <Card item={movie} type="movie" />
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center text-white">
          <img src={NotFound} alt="Not Found" className="w-64 h-64" />
        </div>
      )}
    </div>
  );
};
 
export default Movies;