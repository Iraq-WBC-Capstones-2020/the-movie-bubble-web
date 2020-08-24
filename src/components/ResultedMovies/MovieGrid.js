import React from 'react';
import MovieCard from '../../components/ResultedMovies/MovieCard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function MovieGrid({ data }) {
  const num1 = Math.floor(Math.random() * (18 - 0 + 2)) + 0;
   const num2 = Math.floor(Math.random() * (17 - 0 + 3)) + 0;
    const num3 = Math.floor(Math.random() * (16 - 0 + 4)) + 0;
  const movieData = [
    {
      id: data[num1].id,
      Title: data[num1].original_title,
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + data[num1].poster_path,
    },
    {
      id: data[num2].id,
      Title: data[num2].original_title,
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + data[num2].poster_path,
    },
    {
      id: data[num3].id,
      Title: data[num3].original_title,
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + data[num3].poster_path,
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
