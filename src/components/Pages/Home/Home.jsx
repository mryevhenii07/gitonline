import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrending } from '../../../services/movie-api';
import Pagination from '../../Pagination/Pagination';
import s from './Home.module.css';
import SideBar from '../../Sidebar/SideBar';
import Ratings from '../../Rating/Rating';

const IMAGE = 'https://image.tmdb.org/t/p/w500/';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrending(currentPage)
      .then(trends => trends.data.results)
      .then(setTrends);
    // window.scrollTo(800, 800);
    window.scrollTo(0, 0);
  }, [currentPage]);

  // console.log(trends);
  return (
    <div>
      <div className={s.wrap}>
        {' '}
        <ul className={s.list}>
          {trends.map(
            ({
              id,
              original_title,
              poster_path,
              vote_average,
              release_date,
            }) => (
              <Link to={`movies/${id}`} key={id} className={s.item}>
                <img
                  src={`${IMAGE}${poster_path}`}
                  alt="dd"
                  width="100%"
                  height="405"
                />
                <h4 className={s.title}>{original_title}</h4>

                <div className={s.wrap__info}>
                  <p>
                    <Ratings star={vote_average} />
                  </p>
                  <p className={s.year}>{release_date}</p>
                </div>
              </Link>
            ),
          )}
        </ul>
        <div className={s.publicity}>
          <SideBar />
        </div>
      </div>
      <Pagination onChangePage={number => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
