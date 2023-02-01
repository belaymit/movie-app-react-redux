import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MovieDetails from './components/movieDetails/MovieDetails';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Home from './components/home/Home';
import Shows from './components/shows/Shows';
import { fetchMovies, fetchSeries, fetchShows } from './redux/movieSlice';
import Series from './components/series/Series';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchShows());
    dispatch(fetchSeries());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
