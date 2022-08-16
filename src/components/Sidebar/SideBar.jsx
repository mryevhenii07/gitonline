import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  fetchSidebarFilms,
  fetchSidebarSerials,
} from '../../services/movie-api';
import s from './SideBar.module.css';
// import ModalLogin from '../FormRegistration/ModalLogin/ModalLogin';
// import ModalRegistration from '../FormRegistration/ModalRegistration/ModalRegistration';
import imageDefault from '../../images/default.jpg';
import { IMAGE } from '../../services/movie-api';

const SideBar = () => {
  const [films, setFilm] = useState([]);
  const [serials, setSerials] = useState([]);

  useEffect(() => {
    fetchSidebarFilms().then(setFilm);
  }, []);

  useEffect(() => {
    fetchSidebarSerials().then(setSerials);
  }, []);
  return (
    <div className={s.wrapWrap}>
      <div className={s.wrapRegistration}>
        {/* <ModalLogin className={s.login} />
        <ModalRegistration className={s.registration} /> */}
        {/* <Link to="/login">Login</Link>
        <Link to="/register">Register</Link> */}
      </div>
      <h3 className={s.featuredMovies}>
        Featured Movies <span className={s.arrow}>&#10148;</span>
      </h3>
      <div className={s.wrapWrapListFilm}>
        <div className={s.wrapListFilm}>
          <ul className={s.listFilms}>
            {films.map(({ original_title, id, poster_path }) => (
              <Link to={`movies/${id}`} className={s.itemFilm} key={id}>
                <img
                  src={poster_path ? `${IMAGE}${poster_path}` : imageDefault}
                  alt="sidebar img"
                  width="100%"
                />
                <h3 className={s.titleFilm}> {original_title}</h3>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <h3 className={s.featuredMovies}>
        Featured Series <span className={s.arrow}>&#10148;</span>
      </h3>
      <div className={s.wrapWrapListFilm}>
        <div className={s.wrapListFilm}>
          <ul className={s.listFilms}>
            {serials.map(({ original_title, id, poster_path }) => (
              <Link to={`movies/${id}`} className={s.itemFilm} key={id}>
                <img
                  src={`${IMAGE}${poster_path}`}
                  alt="sidebar img"
                  width="100%"
                />
                <h3 className={s.titleFilm}> {original_title}</h3>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
