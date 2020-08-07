import React from 'react';
import './MovieCard.css';
export default function MovieCard(movie) {
  return (
    <div className="movie-card cursor-pointer ">
      <h1 className="hidden">{movie.singleMovie.id}</h1>

      <img
        className="movie-card__poster content-center  opacity-50"
        src={movie.singleMovie.poster_path}
        alt={movie.singleMovie.Title}
      />
      <div className="relative movie-card__on-hover hidden">
        <div className="movie-card__on-hover text-background  bg-orange-600">
          <h1 className="table-cell text-center align-middle text-2xl text-white font-bold ">
            {movie.singleMovie.Title}
          </h1>
        </div>
      </div>
    </div>
  );
}
