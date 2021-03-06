import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './MoviePage.css';
import greenButton from './images/green-button.png';
import ActorsList from '../../components/MovieActor/ActorList';
import { Spin } from 'react-loading-io';
const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f8178ac917f687379b47ab8562bbd9b8&append_to_response=videos,credits`;
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
    console.log(data.credits.cast);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  if (Object.keys(movie).length > 0 && movie.constructor === Object) {
    const posterUrl = {
      backgroundImage: `
        linear-gradient(
            rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)
          ),
          url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    };
    const display = (a) => {
      let hours = Math.trunc(a / 60);
      let minutes = a % 60;
      return hours + 'h ' + minutes + 'min';
    };
    return (
      <>
        <div
          className="poster__container flex flex-col items-center absolute w-full overflow-hidden bg-cover lg:h-120"
          style={posterUrl}
        >
          <motion.div
            whileHover={{
              scaleX: [1, 1.05, 0.9, 1.02, 0.98, 1],
              scaleY: [1, 0.95, 1.1, 0.98, 1.02, 1],
            }}
            className="green__button h-40 w-40 mt-10 "
          >
            <a
              href={
                'https://www.youtube.com/watch?v=' + movie.videos.results[0].key
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={greenButton} alt="" />
            </a>
          </motion.div>
          <div className="movie__name text-gray-300 self-start text-3xl ml-4">
            {movie.original_title}
            <div className="move__label text-base px-2 text-gray-900 rounded-full inline-block ml-2">
              PG-13
            </div>
          </div>
          <div className="movie__info flex mt-4 ml-4 flex-col space-y-2 self-start space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0">
            <div className="movie__duration text-xl text-gray-200 font-thin flex items-center justify-center italic w-32 h-12 bg-contain bg-no-repeat">
              {display(movie.runtime)}
            </div>
            <div className="movie__genre text-xl text-gray-200 font-thin flex items-center justify-center italic w-32 h-12 bg-contain bg-no-repeat">
              {movie.genres[0].name}
            </div>
            <div className="movie__release text-xl text-gray-200 font-thin flex items-center justify-center italic w-56 h-12 bg-contain bg-no-repeat">
              {movie.release_date}
            </div>
          </div>
          <div />
          <div className="flex ml-4 flex-col lg:flex-row lg:space-x-16 ">
            <div className="description w-full text-lg text-gray-400 italic mt-8 lg:w-2/3">
              {movie.overview}
            </div>
            <div className="rating__container mt-16 flex self-center space-x-10 lg:space-x-16 lg:-mt-20 lg:self-end">
              <div className="space-y-6 flex flex-col items-center justify-center">
                <motion.div
                  className="users__rating flex flex-col items-center justify-center w-32 h-32 bg-contain bg-no-repeat"
                  animate={{
                    scaleX: [1, 1.1, 0.9, 1.05, 1, 1, 1],
                    scaleY: [1, 0.9, 1.1, 0.95, 1, 1, 1],
                    translateY: [0, 10, -40, 20, -10, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    ease: 'easeOut',
                    yoyo: 2,
                  }}
                >
                  <h1 className="text-3xl font-light text-yellow-500">
                    {Math.floor(Math.random() * 99) + 1}%
                  </h1>
                </motion.div>
                <div className="rating__lable px-4 py-1 text-lg font-semibold  text-gray-900 w-20 rounded-full ">
                  Users
                </div>
              </div>
              <div className="space-y-6 flex flex-col items-center justify-center">
                <motion.div
                  className="IMDB__rating flex flex-col items-center justify-center w-32 h-32 bg-contain bg-no-repeat"
                  animate={{
                    translateX: [
                      0,
                      12,
                      24,
                      12,
                      0,
                      -12,
                      -24,
                      -12,
                      0,
                      -12,
                      -24,
                      -12,
                      0,
                    ],
                    translateY: [
                      0,
                      -12,
                      -24,
                      -36,
                      -48,
                      -60,
                      -72,
                      -60,
                      -48,
                      -36,
                      -24,
                      -12,
                      0,
                    ],
                    scaleX: [1, 1.1, 0.9, 1.05, 0.9, 1.1, 0.95, 1.1, 1, 1],
                    scaleY: [1, 0.9, 1.1, 0.95, 1.1, 0.9, 1.05, 0.9, 1, 1],
                  }}
                  transition={{
                    duration: 6,
                  }}
                >
                  <h1 className="text-3xl font-light text-yellow-500">
                    {movie.vote_average * 10}%
                  </h1>
                </motion.div>
                <div className="rating__lable px-4 py-1 text-lg font-semibold  text-gray-900 w-20 rounded-full ">
                  critics
                </div>
              </div>
            </div>
          </div>
          <ActorsList cast={movie.credits.cast} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Spin size={200} color={'#ff7521'} className="loading" />
      </>
    );
  }
};
export default MoviePage;
