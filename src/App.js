import { useState, createContext } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import 'normalize.css';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import TrendingDay from './pages/TrendingDay/TrendingDay';
import Genres from './components/Genres/Genres';
import Footer from './components/Footer/Footer';
import { useAuth } from './hooks/use-auth';

const Home = lazy(() =>
  import('./pages/Home/Home' /* webpackChunkName:"home" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName:"home" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage' /* webpackChunkName:"home" */),
);
const Movies = lazy(() =>
  import('./pages/Movies/Movies' /* webpackChunkName:"home" */),
);
const NotFoundView = lazy(() =>
  import(
    './pages/NotFoundView/NotFoundView' /* webpackChunkName:"notFoundView" */
  ),
);
const MovieDetails = lazy(() =>
  import(
    './components/MovieDetails/MovieDetails' /* webpackChunkName:"movieDetails" */
  ),
);
const Cast = lazy(() =>
  import('./pages/Cast/Cast' /* webpackChunkName:"cast" */),
);

export const SearchContext = createContext('');

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const { isAuth } = useAuth();

  return (
    <div style={{ width: 1200, margin: ' 0 auto' }}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        {isAuth && <Navigation />}
        {isAuth && <TrendingDay />}
        {isAuth && <Genres />}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />} />
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
            {/* <Route path="*" element={<NotFoundView />} /> */}
          </Routes>
        </Suspense>
        {isAuth && <Footer />}
      </SearchContext.Provider>
    </div>
  );
};

export default App;
