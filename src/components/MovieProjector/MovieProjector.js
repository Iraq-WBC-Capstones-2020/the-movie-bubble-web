import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import cam from './cam.svg';
import circle from './circle.svg';
import './MovieProjector.css';
const MovieProjector = () => {
  useEffect(() => {
  getPosters()  
  },[]);
  const [poster, setPoster] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const getPosters = async () => {
    const url = "https://api.themoviedb.org/3/discover/movie"
    const api_key = "?api_key=f8178ac917f687379b47ab8562bbd9b8"
    const info = await fetch(url + api_key)
    const result = await info.json()
    setPoster(result.results)
    console.log(result.results)
  }
  if (poster.length > 0)
  {
  return (
    <>
      <div className="flex items-center mx-4">
        <motion.div
          className="circle lg:-mr-48 z-10 w-48 h-48 -mt-6 md:hidden sm:hidden"
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1,
          delay: 0.5 }}
        >
          <img src={circle} alt="cirlce" />
        </motion.div>
        <div className="cam lg:ml-12 md:hidden sm:hidden">
          <img src={cam} alt="logo" className="logo w-24 h-24" />
        </div>
        <motion.div
          className="camera__light lg:w-64 h-64 -ml-4 -mt-6 bg-white z-50 md:hidden sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            yoyo: Infinity
          }}
        ></motion.div>
        <div className="projector__container flex flex-col items-center overflow-hidden sm:ml-0 md:ml-0 w-full lg:w-1/2 -ml-16 mt-6 mb-4"
         onMouseEnter={() => setIsShown(true)}
         onMouseLeave={() => setIsShown(false)}>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
          >
            <div className="projector__poster bg-cover w-full h-1/2 text-center relative">
              <img src={"https://image.tmdb.org/t/p/original" + poster[1].backdrop_path} 
              alt="poster"
              /> {/*props*/}
              {isShown &&
        <motion.div className= "text-white text-xl flex w-full bg-black bg-opacity-50 -mt-8 absolute"
        initial=
        {{ 
          opacity: 0,
          x: -160
         }}
        animate=
        {{
           opacity: 1,
          x:0
          }}
        transition={{
          duration: 1}}
          >
            <h1 className="ml-4">{poster[2].original_title}</h1>
        </motion.div>
        }
            </div>
            <div className="movie__description text-gray-200 mt-1 text-lg text-center">
          <h3 className="description p-4">{poster[2].overview}</h3> {/*props*/}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
          }
  else{
    return(
      <>
      <h1>hi</h1>
      </>
    )
  }
          }
export default MovieProjector;
