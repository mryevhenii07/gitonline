import { useState, createContext, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import 'normalize.css';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import TrendingDay from './pages/TrendingDay/TrendingDay';
import Genres from './components/Genres/Genres';
import Footer from './components/Footer/Footer';
import { useAuth } from './hooks/use-auth';

import Spiner from './components/Spiner/Spiner';

// import MyTools from './pages/MyTools/MyTools';

const Home = lazy(() =>
  import('./pages/Home/Home' /* webpackChunkName:"home" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage' /* webpackChunkName:"home" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage' /* webpackChunkName:"home" */),
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
  console.log(isAuth);

  return (
    <div style={{ width: 1200, margin: ' 0 auto' }}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        {isAuth && <Navigation />}
        {isAuth && <TrendingDay />}
        {isAuth && <Genres />}
        <Suspense
          fallback={
            <div>
              {' '}
              <Spiner />
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            {/* <Route path="/tools" component={MyTools} /> */}

            {isAuth && (
              <Route path="/movies/:movieId" component={MovieDetails} />
            )}

            <Route path="/movies/:movieId/cast" component={Cast} />
            {/* <Route path="*" component={<Navigate to="/login" replace />} /> */}
            <Redirect to="/" component={NotFoundView} />
          </Switch>
        </Suspense>
        {isAuth && <Footer />}
      </SearchContext.Provider>
    </div>
  );
};

export default App;
