import React from 'react';
import { motion } from 'framer-motion';
import First from './posters/1.jpg';
import Second from './posters/2.jpg';
import Third from './posters/3.jpg';
import Fourth from './posters/4.jpg';
import './Sliders.css';
const Sliders = () => {
  return (
    <>
      <div className="container flex flex-row">
        <motion.div
          animate={{
            x: 79,
            y: 16,
          }}
          transition={{ duration: 1 }}
          className="   first z-40"
        >
          <div className="shadow bg-gray-400">
            <img src={First} alt="poster-1" className="poster opacity-75"></img>
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: 79,
            y: 16,
            rotate: 6,
          }}
          transition={{ duration: 1 }}
          className="second z-30"
        >
          <div className="shadow">
            <img src={Second} alt="poster-2" className="poster"></img>
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: 79,
            y: 38,
            rotate: 16,
          }}
          transition={{ duration: 1 }}
          className="third z-20"
        >
          <div className="shadow">
            <img src={Third} alt="poster-3" className="poster"></img>
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: 79,
            y: 68,
            rotate: 26,
          }}
          transition={{ duration: 1 }}
          className="fourth z-10"
        >
          <div className="shadow">
            <img src={Fourth} alt="poster-4" className="poster"></img>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Sliders;
