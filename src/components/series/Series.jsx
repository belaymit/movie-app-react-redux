import React from 'react';
import { useSelector } from 'react-redux';
import { getEpisodes } from '../../redux/movieSlice';
import Card from '../card/Card';
import '../../styles/movieList.scss';

const Series = () => {
  const shows = useSelector(getEpisodes);
  let renderMovies = '';

  renderMovies = shows.Response === 'True' ? (
    shows.Episodes.map((show) => (
      <Card key={show.index} data={show} />
    ))
  ) : (
    <div className="movies-error"><h3>{shows.error}</h3></div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h3>Shows</h3>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default Series;
