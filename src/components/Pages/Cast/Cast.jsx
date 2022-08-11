import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from '../../../services/movie-api';
import imgDefault from '../../../images/default.jpg';
import { IMAGE } from '../../../services/movie-api';

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
          <img
            src={profile_path ? `${IMAGE}${profile_path}` : imgDefault}
            alt=""
            width="200"
          />
          <h3>{name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
//  src={item.profile_path ? `${IMAGE}${item.profile_path}` : url}
