/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApiKey } from '../common/apis/ApiKey';
import axiosApi from '../common/apis/axiosApi';

const initialState = {
  movies: {},
  shows: {},
  episode: {},
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const text = 'black';
  const response = await axiosApi.get(`?apiKey=${ApiKey}&s=${text}&type=movie`);
  return response.data;
});

export const fetchShows = createAsyncThunk('movies/fetchShows', async () => {
  const text = 'breaking';
  const response = await axiosApi.get(`?apiKey=${ApiKey}&s=${text}&type=series`);
  return response.data;
});

export const fetchSeries = createAsyncThunk('movies/fetchSeries', async () => {
  const text = 'Game of Thrones';
  const response = await axios.get(`https://www.omdbapi.com/?apiKey=8e1cb18c&t=${text}&Season=1`);
  return response.data;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.err = '';
    });

    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.err = action.err.message;
    });

    builder.addCase(fetchShows.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = action.payload;
      state.err = '';
    });
    builder.addCase(fetchSeries.fulfilled, (state, action) => {
      state.loading = false;
      state.episode = action.payload;
      state.err = '';
    });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.items.movies;
export const getAllShows = (state) => state.items.shows;
export const getEpisodes = (state) => state.items.episode;
export default movieSlice.reducer;
