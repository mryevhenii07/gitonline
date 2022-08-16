import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import { fetchCast } from '../../services/movie-api';
// import imgDefault from '../../../images/default.jpg';
// import { IMAGE } from '../../services/movie-api';

import { fetchCast } from '../../services/movie-api';
import imgDefault from '../../images/default.jpg';
import { IMAGE } from '../../services/movie-api';

import s from './Cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    return fetchCast(movieId).then(setActors);
  }, [movieId]);
  console.log(actors);
  return (
    <ul className={s.list}>
      {actors.map(({ id, name, profile_path }) => (
        <li key={id} className={s.item}>
          <img
            src={profile_path ? `${IMAGE}${profile_path}` : imgDefault}
            alt=""
            width="220"
            height="315"
          />
          <h3 className={s.name}>{name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
//  src={item.profile_path ? `${IMAGE}${item.profile_path}` : url}
