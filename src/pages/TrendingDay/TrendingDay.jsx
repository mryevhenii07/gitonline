import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendingWeek } from '../../services/movie-api';
import s from './TrendingDay.module.css';
import imageDefault from '../../images/default.jpg';
import { IMAGE } from '../../services/movie-api';

const TrendingDay = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    fetchTrendingWeek()
      .then(trends => trends.data.results)
      .then(setTrends);
  }, []);
  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        {trends.map(({ id, original_title, poster_path }) => (
          <Link to={`movies/${id}`} key={id} className={s.item}>
            <img
              src={poster_path ? `${IMAGE}${poster_path}` : imageDefault}
              alt="dd"
              width="151.5"
              height="226"
            />
            <h4 className={s.title}>{original_title}</h4>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TrendingDay;
