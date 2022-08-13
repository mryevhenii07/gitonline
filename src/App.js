import { useState, createContext } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'normalize.css';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import TrendingDay from './components/Pages/TrendingDay/TrendingDay';
import Genres from './components/Genres/Genres';
import Footer from './components/Footer/Footer';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import RegisterPage from './components/Pages/RegisterPage/RegisterPage';

const Home = lazy(() =>
  import('./components/Pages/Home/Home' /* webpackChunkName:"home" */),
);
const Movies = lazy(() =>
  import('./components/Pages/Movies/Movies' /* webpackChunkName:"home" */),
);
const NotFoundView = lazy(() =>
  import(
    './components/Pages/NotFoundView/NotFoundView' /* webpackChunkName:"notFoundView" */
  ),
);
const MovieDetails = lazy(() =>
  import(
    './components/Pages/MovieDetails/MovieDetails' /* webpackChunkName:"movieDetails" */
  ),
);
const Cast = lazy(() =>
  import('./components/Pages/Cast/Cast' /* webpackChunkName:"cast" */),
);
const Reviews = lazy(() =>
  import('./components/Pages/Reviews/Reviews' /* webpackChunkName:"reviews" */),
);

export const SearchContext = createContext('');

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div style={{ width: 1200, margin: ' 0 auto' }}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Navigation />
        <TrendingDay />
        <Genres />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />} />
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="movies/:movieId/reviews" element={<Reviews />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            {/* <Route path="*" element={<NotFoundView />} /> */}
          </Routes>
        </Suspense>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
};

export default App;
