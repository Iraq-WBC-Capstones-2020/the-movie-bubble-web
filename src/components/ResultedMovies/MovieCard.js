import React from 'react';

export default function MovieCard(movie) {
  return (
    <div className="movie-card cursor-pointer overflow-hidden">
      <h1 className="hidden">{movie.singleMovie.id}</h1>

      <img
        className="movie-card-width-height movie-card__poster w-full overflow-hidden  object-cover content-center  opacity-50"
        src={movie.singleMovie.poster_path}
        alt={movie.singleMovie.Title}
      />
      <div className="movie-card-width-height title-display relative hidden">
        <div className="absolute inset-x-0 bottom-0 h-64 content-center mb-8  bg-orange-600 rounded-sm">
          <h1 className="text-2xl text-center text-white font-bold ">
            {movie.singleMovie.Title}
          </h1>
        </div>
      </div>
    </div>
  );
}
