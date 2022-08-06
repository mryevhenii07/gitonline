import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from '../../../services/movie-api';

const IMAGE = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    return fetchCast(movieId).then(setActors);
  }, [movieId]);
  console.log(actors);
  return (
    <ul>
      {actors.map(({ id, name, profile_path }) => (
        <li key={id}>
          <img src={`${IMAGE}${profile_path}`} alt="" width="200" />
          <h3>{name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
