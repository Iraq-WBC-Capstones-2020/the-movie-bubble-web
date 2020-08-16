import React from 'react';
import { motion } from 'framer-motion';
import First from '../../assets/posters/1.jpg';
import Second from '../../assets/posters/2.jpg';
import Third from '../../assets/posters/3.jpg';
import Fourth from '../../assets/posters/4.jpg';
const Sliders = () => {
  return (
    <>
      <div className="slider__container hidden lg:flex flex-row absolute w-1/2 h-full">
        <motion.div
           animate={{
            x: 79
          }}
          initial={{
            x: 0
          }}
          transition={{ duration: 1, ease:"easeInOut", delay: 1}}
          className="   first z-40 mt-4"
        >
          <div className="shadow shadow-3xl rounded-20 bg-gray-400">
            <img src={First} alt="poster-1" className="poster rounded-20 opacity-75"></img>
          </div>
        </motion.div>
        <motion.div
           animate={{
            x: 79,
            y: 16,
            rotate: 6,
          }}
          initial={{
            x: -150,
            y:14
          }}
          transition={{ duration: 1, ease:"easeInOut",  delay: 1}}
          className="second z-30 -ml-48"
        >
          <div className="shadow shadow-3xl rounded-20">
            <img src={Second} alt="poster-2" className="poster rounded-20"></img>
          </div>
        </motion.div>
        <motion.div
           animate={{
            x: 79,
            y: 38,
            rotate: 16,
          }}
          initial={{
            x: -270,
            y:15
          }}
          transition={{ duration: 1, ease:"easeInOut", delay: 1}}
          className="third z-20 -ml-56"
        >
          <div className="shadow shadow-3xl rounded-20">
            <img src={Third} alt="poster-3" className="poster rounded-20 "></img>
          </div>
        </motion.div>
        <motion.div
           animate={{
            x: 79,
            y: 68,
            rotate: 26,
          }}
          initial={{
            x: -320,
            y:15
          }}
          transition={{ duration: 1,ease:"easeInOut",  delay: 1 }}
          className="fourth z-10 -ml-64"
        >
          <div className="shadow shadow-3xl rounded-20">
            <img src={Fourth} alt="poster-4" className="poster rounded-20"></img>
          </div>
        </motion.div>
      </div>
      <div className="cover_md md:flex lg:hidden"></div>
    </>
  );
};
export default Sliders;
