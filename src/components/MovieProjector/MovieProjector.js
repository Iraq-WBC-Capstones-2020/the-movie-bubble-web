import React from 'react';
import { motion } from 'framer-motion';
import cam from './cam.svg';
import circle from './circle.svg';
import './MovieProjector.css';
const MovieProjector = () => {
  return (
    <>
      <div className="flex items-center ml-4">
        <motion.div
          className="circle mt-16 -mr-48 z-10"
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={circle} alt="cirlce" />
        </motion.div>
        <div className="cam ml-12">
          <img src={cam} alt="logo" className="logo" />
        </div>
        <motion.div
          className="camera__light w-64 h-64 -ml-4 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{
            delay: 1,
            duration: 0.4,
            yoyo: 12,
          }}
        ></motion.div>
        <div className="projector__container flex flex-col items-center w-1/2 -ml-16 mt-16">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 3,
            }}
          >
            <div className="projector__poster mt-10">
              <img src="#" alt="poster" /> {/*props*/}
            </div>
            <div className="movie__description mt-10 text-white text-xl">
              <h3>#</h3> {/*props*/}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default MovieProjector;
