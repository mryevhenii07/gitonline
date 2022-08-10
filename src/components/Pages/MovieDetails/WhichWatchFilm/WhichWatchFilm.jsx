import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FetchWhichWatchFilm } from '../../../../services/movie-api';

import s from './WhichWatchFilm.module.css';

const IMAGE = 'https://image.tmdb.org/t/p/w500/';

const WhichWatchFilm = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    return FetchWhichWatchFilm().then(setFilm);
  }, []);
  console.log(film);
  return (
    <div className={s.wrap}>
      <p className={s.titleSee}>What else to see</p>
      <ul className={s.list}>
        {film.map(({ id, original_title, poster_path }) => (
          <Link to={`movies/${id}`} key={id} className={s.item}>
            <img
              src={`${IMAGE}${poster_path}`}
              alt="dd"
              width="195"
              height="320"
            />
            <h4 className={s.title}>{original_title}</h4>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default WhichWatchFilm;
