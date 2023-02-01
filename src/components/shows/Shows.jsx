import React from 'react';
import { useSelector } from 'react-redux';
import { getAllShows } from '../../redux/movieSlice';
import Card from '../card/Card';
import '../../styles/movieList.scss';

const Shows = () => {
  const shows = useSelector(getAllShows);
  let renderMovies = '';

  renderMovies = shows.Response === 'True' ? (
    shows.Search.map((show) => (
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

export default Shows;
