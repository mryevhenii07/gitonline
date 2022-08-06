import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Home from '../Pages/Home/Home';
import Movies from '../Pages/Movies/Movies';
import NotFoundView from '../Pages/NotFoundView/NotFoundView';
import MovieDetails from '../Pages/MovieDetails/MovieDetails';
import Cast from '../Pages/Cast/Cast';
import Reviews from '../Pages/Reviews/Reviews';
import Genres from '../Genres/Genres';
import TrendingDay from '../Pages/TrendingDay/TrendingDay';

const AppBar = () => {
  return (
    <div>
      <Navigation />
      <TrendingDay />
      <Genres />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        {/* <Route path="movies/:movieId" element={<TrendingDay />} /> */}

        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
};

export default AppBar;
