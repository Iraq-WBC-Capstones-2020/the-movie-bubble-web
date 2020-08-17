import React from 'react';
import MovieCard from '../../components/ResultedMovies/MovieCard';
import PropTypes from 'prop-types';
export default function MovieGrid() {
  const movieData = [
    {
      id: '0',
      Title: 'Birds of Pray',
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg',
    },
    {
      id: '1',
      Title: 'Harry Porter',
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/csOv5H7R2zdnKaYuTrGVWohmo8d.jpg',
    },
    {
      id: '2',
      Title: 'Scoob! (2020)',
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/zG2l9Svw4PTldWJAzC171Y3d6G8.jpg',
    },
    {
      id: '3',
      Title: 'Star Wars',
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
    },
    {
      id: '4',
      Title: 'Avengers',
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    },
    {
      id: '5',
      Title: 'Interstellar',
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    },
    {
      id: '6',
      Title: 'An American Pickle',
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4HEg1qXxGXQk1ds2A3gCnJpuP2z.jpg',
    },
  ];
  return (
    <div className="grid justify-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {movieData.map((movieItem) => (
          <div
            key={movieItem.id}
            className="flex items-center justify-center gradient-orange wh  rounded-md"
          >
            <MovieCard movie={movieItem} />
          </div>
        ))}
      </div>
    </div>
  );
}
MovieGrid.propTypes = {
  movieData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      Title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};