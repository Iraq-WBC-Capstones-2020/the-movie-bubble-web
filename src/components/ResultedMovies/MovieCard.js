import React from 'react';
import PropTypes from 'prop-types';
export default function MovieCard({ movie }) {
  return (
    <div className="movie-card cursor-pointer overflow-hidden">
      <h1 className="hidden">{movie.id}</h1>

      <img
        className="w-64 h-64 p-1 movie-card__poster overflow-hidden  object-cover  opacity-50"
        src={movie.poster_path}
        alt={movie.Title}
      />
      <div className="w-64 h-64 title-display relative hidden">
        <div className="absolute inset-x-0 bottom-0 h-16 mb-8  bg-orange-600 rounded-sm">
          <h1 className="text-2xl align-middle text-center text-white font-bold ">
            {movie.Title}
          </h1>
        </div>
      </div>
    </div>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      Title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
