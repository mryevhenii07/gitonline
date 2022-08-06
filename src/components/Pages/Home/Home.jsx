import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrending } from '../../../services/movie-api';
import s from './Home.module.css';

const IMAGE = 'https://image.tmdb.org/t/p/w500/';

const Home = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    fetchTrending()
      .then(trends => trends.data.results)
      .then(setTrends);
  }, []);

  // console.log(trends);
  return (
    <ul className={s.list}>
      {trends.map(
        ({
          id,
          original_title,
          poster_path,
          vote_average,
          overview,
          popularity,
        }) => (
          <Link to={`movies/${id}`} key={id} className={s.item}>
            <h4>{original_title}</h4>

            <img src={`${IMAGE}${poster_path}`} alt="dd" width="100%" />
            <p>{overview}</p>
            <p>{popularity}</p>
            <p>{vote_average}</p>
          </Link>
        ),
      )}
    </ul>
  );
};

export default Home;
