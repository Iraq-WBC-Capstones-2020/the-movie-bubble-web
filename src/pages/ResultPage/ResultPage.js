import React, { useState, useEffect } from 'react';
import MovieProjector from '../../components/MovieProjector/MovieProjector';
import MovieGrid from '../../components/ResultedMovies/MovieGrid'
import { Spin } from "react-loading-io";
import './resultpage.css'
const ResutlPage = () => {
  useEffect(() => {
    getPosters()
  }, []);
  const [poster, setPoster] = useState([]);
  const getPosters = async () => {
    const url = "https://api.themoviedb.org/3/discover/movie"
    const api_key = "?api_key=f8178ac917f687379b47ab8562bbd9b8"
    const info = await fetch(url + api_key)
    const result = await info.json()
    setPoster(result.results)
    console.log(result.results)
  }
  if (poster.length > 0) {
    return (
      <>
        <div className="absolute bg-darkgray">
          <MovieProjector data={poster} />
          <MovieGrid data={poster} />
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <Spin size={200} color={"#ff7521"} className="loading" />
      </>
    )
  }

}
export default ResutlPage;