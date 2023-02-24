import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <>
            <img
              className={`row__poster`}
              key={movie.name}
              src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
              alt={movie.name}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
