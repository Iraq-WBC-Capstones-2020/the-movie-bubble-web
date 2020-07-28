import React from 'react';
import { motion } from 'framer-motion';
import First from './posters/1.jpg';
import Second from './posters/2.jpg';
import Third from './posters/3.jpg';
import Fourth from './posters/4.jpg';
import './MoviesPosters.css';
const Posters = () => {
  return (
    <>
      <div className="flex flex-row">
        <motion.div
          animate={{
            x: 79,
            y: 16,
          }}
          transition={{ duration: 1 }}
          className="first container lg:w-64  m-auto z-40"
        >
          <div className="background bg-gray-500 rounded-lg">
            <img
              src={First}
              alt="poster-1"
              className="img1 rounded-lg opacity-75"
            ></img>
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: 79,
            y: 16,
            rotate: 6,
          }}
          transition={{ duration: 1 }}
          className="second container lg:w-64 m-auto z-30"
        >
          <div className="background bg-gray-500 rounded-lg">
            <img
              src={Second}
              alt="poster-2"
              className="img1 rounded-lg opacity-75"
            ></img>
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: 79,
            y: 38,
            rotate: 16,
          }}
          transition={{ duration: 1 }}
          /* the is no need to change the opacity here */
          className="third container lg:w-64 m-auto z-20"
        >
          <div className="background bg-gray-700 rounded-lg">
            <img src={Third} alt="poster-3" className="img1 rounded-lg"></img>
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: 79,
            y: 68,
            rotate: 28,
          }}
          transition={{ duration: 1 }}
          /* the is no need to change the opacity here */
          className="fourth container lg:w-64 m-auto z-10"
        >
          <div className="background bg-gray-900 rounded-lg">
            <img src={Fourth} alt="poster-4" className="img1 rounded-lg"></img>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Posters;
