import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/movieSlice';
import Card from '../card/Card';
import '../../styles/movieList.scss';

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = '';

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie) => (
      <Card key={movie.index} data={movie} />
    ))
  ) : (
    <div className="movies-error"><h3>{movies.error}</h3></div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h3>Movies</h3>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieList;
