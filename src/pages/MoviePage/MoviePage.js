import React from 'react';
import { motion } from 'framer-motion';
import './MoviePage.css';
import poster from './images/1.jpg';
import greenButton from './images/green-button.png';
const posterUrl = {
  backgroundImage: `
    linear-gradient(
        rgba(0, 0, 0, 0.6), 
        rgba(0, 0, 0, 0.6)
      ),
      url(${poster})`,
};
const MoviePage = () => {
  return (
    <>
      <div
        className="poster__container flex flex-col items-center absolute w-full h-full overflow-hidden bg-cover"
        style={posterUrl}
      >
        <motion.div
          whileHover={{
            scaleX: [1, 1.05, 0.9, 1.02, 0.98, 1],
            scaleY: [1, 0.95, 1.1, 0.98, 1.02, 1],
          }}
          className="green__button h-40 w-40 mt-10 "
        >
          <img src={greenButton} alt="" />
        </motion.div>
        <div className="movie__name text-gray-300 self-start text-3xl ml-4">
          EVIL DEAD(1981){' '}
          <div className="move__label text-base px-2 text-gray-900 rounded-full inline-block">
            PG-13
          </div>
        </div>
        <div className="movie__info flex self-start space-x-3 ml-4 mt-3">
          <div className="movie__duration text-xl text-gray-200 font-thin flex items-center justify-center italic w-32 h-12 bg-contain bg-no-repeat">
            {' '}
            1h 47min
          </div>
          <div className="movie__genre text-xl text-gray-200 font-thin flex items-center justify-center italic w-32 bg-contain bg-no-repeat">
            Horror
          </div>
          <div className="movie__release text-xl text-gray-200 font-thin flex items-center justify-center italic w-56 bg-contain bg-no-repeat">
            19 November(1981)
          </div>
        </div>
        <div />
        <div className="flex space-x-16 ml-4 mt-4">
          <div className="description w-2/3 text-gray-400 italic">
            Eiusmod fugiat esse nulla in. Incididunt laborum duis ad ut commodo
            est mollit incididunt fugiat. Esse id ullamco ullamco pariatur
            aliqua velit occaecat amet. Et velit enim consectetur pariatur
            proident elit incididunt excepteur ex veniam anim consequat
            pariatur. Cupidatat reprehenderit irure tempor esse aliquip amet ea
            dolore dolor aliquip. Consectetur eiusmod amet sunt et officia Lorem
            do reprehenderit veniam tempor ea aute occaecat eiusmod.
          </div>
          <div className="rating__container flex space-x-16 -mt-20">
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
                <h1 className="text-3xl font-light text-yellow-500">73%</h1>
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
                <h1 className="text-3xl font-light text-yellow-500">69%</h1>
              </motion.div>
              <div className="rating__lable px-4 py-1 text-lg font-semibold  text-gray-900 w-20 rounded-full ">
                IMDB
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MoviePage;
