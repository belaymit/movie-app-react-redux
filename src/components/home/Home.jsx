import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../movieList/MovieList';
import axiosApi from '../../common/apis/axiosApi';
import { ApiKey } from '../../common/apis/ApiKey';
import { addMovies } from '../../redux/movieSlice';
import '../../styles/home.scss';

const Home = () => {
  const text = 'black';
  const dispatch = useDispatch();
  const fetchMovie = async () => {
    const response = await axiosApi.get(
      `?apiKey=${ApiKey}&s=${text}&type=movie`,
    );
    dispatch(addMovies(response.data));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div className="movie-img">
        <MovieList />
      </div>
    </>
  );
};

export default Home;
