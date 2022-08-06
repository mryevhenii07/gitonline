import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendingWeek } from '../../../services/movie-api';
import s from './TrendingDay.module.css';

const IMAGE = 'https://image.tmdb.org/t/p/w500/';

const TrendingDay = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    fetchTrendingWeek()
      .then(trends => trends.data.results)
      .then(setTrends);
  }, []);

  // console.log(trends);
  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        {trends.map(({ id, original_title, poster_path }) => (
          <Link to={`movies/${id}`} key={id} className={s.item}>
            <img src={`${IMAGE}${poster_path}`} alt="dd" width="100%" />
            <h4 className={s.title}>{original_title}</h4>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TrendingDay;
