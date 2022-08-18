import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FetchWhichWatchFilm } from '../../../services/movie-api';
import s from './WhichWatchFilm.module.css';
import imageDefault from '../../../images/default.jpg';
import { IMAGE } from '../../../services/movie-api';

const WhichWatchFilm = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    return FetchWhichWatchFilm().then(setFilm);
  }, []);
  return (
    <div className={s.wrap}>
      <p className={s.titleSee}>What else to see</p>
      <ul className={s.list}>
        {film.map(({ id, original_title, poster_path }) => (
          <Link to={`/movies/${id}`} key={id} className={s.item}>
            <img
              src={poster_path ? `${IMAGE}${poster_path}` : imageDefault}
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
