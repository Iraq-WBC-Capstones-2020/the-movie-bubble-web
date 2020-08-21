import React from 'react';
import MovieCard from '../../components/ResultedMovies/MovieCard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function MovieGrid({ data }) {
  const movieData = [
    {
      id: data[1].id,
      Title: data[1].original_title,
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + data[1].poster_path,
    },
    {
      id: data[2].id,
      Title: data[2].original_title,
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + data[2].poster_path,
    },
    {
      id: data[3].id,
      Title: data[3].original_title,
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + data[3].poster_path,
    },
  ];
  return (
    <div className="grid justify-center mb-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {movieData.map((movieItem) => (
          <Link key={movieItem.id} to={'movie/' + movieItem.id}>
            <div
              key={movieItem.id}
              className="flex items-center justify-center gradient-orange wh  rounded-md"
            >
              <MovieCard movie={movieItem} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
MovieGrid.propTypes = {
  data: PropTypes.array.isRequired,
};
