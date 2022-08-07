import { useEffect, useState } from 'react';

import { fetchSidebar } from '../../services/movie-api';
import s from './SideBar.module.css';

const IMAGE = 'https://image.tmdb.org/t/p/w500/';

const SideBar = () => {
  const [films, setFilm] = useState([]);
  useEffect(() => {
    fetchSidebar().then(setFilm);
  }, []);

  return (
    <div>
      <div className={s.wrapRegistration}>
        <button>REGISTRATION</button>
        <button>LOGIN</button>
      </div>
      <h3 className={s.featuredMovies}>
        Featured Movies <span className={s.arrow}>&#10148;</span>
      </h3>
      <div className={s.wrapWrapListFilm}>
        <div className={s.wrapListFilm}>
          <ul className={s.listFilms}>
            {films.map(({ original_title, id, poster_path }) => (
              <li className={s.itemFilm} key={id}>
                <img
                  src={`${IMAGE}${poster_path}`}
                  alt="sidebar img"
                  width="100%"
                />
                <h3 className={s.titleFilm}> {original_title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
