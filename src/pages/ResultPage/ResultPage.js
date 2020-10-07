import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import MovieProjector from '../../components/MovieProjector/MovieProjector';
import MovieGrid from '../../components/ResultedMovies/MovieGrid';
import { Spin } from 'react-loading-io';
import './resultpage.css';
const ResutlPage = (props) => {
  let history = useHistory();
  const [poster, setPoster] = useState([]);
  const getPosters = useCallback(async () => {
    if (props.data.length <= 0) {
      history.push('/quiz');
    } else {
      const genre = props.data[1].isAnimation ? 16 + ',' + props.data[0].genre.id  : props.data[0].genre.id;
      const withOut = props.data[1].isAnimation ? 67676 : 16;
      const min = props.data[2].isClassic ? 1970 : 2000;
      const max = props.data[2].isClassic ? 2000 : 2020;
      console.log(props.data);
      const url = new URL(`https://api.themoviedb.org/3/discover/movie`);
      const params = {
        api_key: 'f8178ac917f687379b47ab8562bbd9b8',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: false,
        with_genres: genre,
        without_genres: withOut,
        'release_date.gte': new Date(min+"").toJSON(),
        'release_date.lte': new Date(max+"").toJSON()
      };
      url.search = new URLSearchParams(params).toString();
      console.log(url);
      const info = await fetch(url);
      const result = await info.json();
      setPoster(result.results);
    }
  }, [props.data, history]);
  useEffect(() => {
    getPosters();
  }, [getPosters]);
  if (poster.length > 0) {
    return (
      <>
        <div className="absolute bg-darkgray">
          <MovieProjector data={poster} />
          <MovieGrid data={poster} />
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
export default ResutlPage;
