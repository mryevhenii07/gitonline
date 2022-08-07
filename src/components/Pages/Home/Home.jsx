import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import ReactPaginate from 'react-paginate';

import { fetchTrending } from '../../../services/movie-api';
import Pagination from '../../Pagination/Pagination';
import s from './Home.module.css';
// import defaultImg from '../../../images/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
import SideBar from '../../Sidebar/SideBar';

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
                <img src={`${IMAGE}${poster_path}`} alt="dd" width="100%" />
                <h4 className={s.title}>{original_title}</h4>

                <div className={s.wrap__info}>
                  <p>{vote_average}</p> <p>{release_date}</p>
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
