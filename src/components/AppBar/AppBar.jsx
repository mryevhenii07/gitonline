import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Genres from '../Genres/Genres';
import TrendingDay from '../Pages/TrendingDay/TrendingDay';

// import Home from '../Pages/Home/Home';
// import Movies from '../Pages/Movies/Movies';
// import NotFoundView from '../Pages/NotFoundView/NotFoundView';
// import MovieDetails from '../Pages/MovieDetails/MovieDetails';
// import Cast from '../Pages/Cast/Cast';
// import Reviews from '../Pages/Reviews/Reviews';

const Home = lazy(() =>
  import('../Pages/Home/Home' /* webpackChunkName:"home" */),
);
const Movies = lazy(() =>
  import('../Pages/Movies/Movies' /* webpackChunkName:"home" */),
);
const NotFoundView = lazy(() =>
  import(
    '../Pages/NotFoundView/NotFoundView' /* webpackChunkName:"notFoundView" */
  ),
);
const MovieDetails = lazy(() =>
  import(
    '../Pages/MovieDetails/MovieDetails' /* webpackChunkName:"movieDetails" */
  ),
);
const Cast = lazy(() =>
  import('../Pages/Cast/Cast' /* webpackChunkName:"cast" */),
);
const Reviews = lazy(() =>
  import('../Pages/Reviews/Reviews' /* webpackChunkName:"reviews" */),
);

const AppBar = () => {
  return (
    <div>
      <Navigation />
      <TrendingDay />
      <Genres />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          {/* <Route path="movies/:movieId" element={<TrendingDay />} /> */}

          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppBar;
