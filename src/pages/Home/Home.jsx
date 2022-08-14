import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchTrending, fetchSearchFilm } from '../../services/movie-api';
import Pagination from '../../components/Pagination/Pagination';
import s from './Home.module.css';
import SideBar from '../../components/Sidebar/SideBar';
import Ratings from '../../components/Rating/Rating';
import { SearchContext } from '../../App';
import imageDefault from '../../images/default.jpg';
import { IMAGE } from '../../services/movie-api';

import { useAuth } from '../../hooks/use-auth';
// import { removeUser } from '../../store/slices/userSlice';

const Home = () => {
  const { isAuth } = useAuth();

  let navigation = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [trends, setTrends] = useState([]);
  const [query, setQuery] = useState([]);

  const { searchValue } = useContext(SearchContext);

  // const dispatch = useDispatch();

  useEffect(() => {
    fetchSearchFilm(searchValue).then(setQuery);
  }, [searchValue]);

  useEffect(() => {
    fetchTrending(currentPage)
      .then(trends => trends.data.results)
      .then(setTrends);
    window.scrollTo(0, 0);
  }, [currentPage]);

  const fuse = new Fuse(query, {
    includeScore: true,
    keys: ['title', 'original_title'],
  });

  const results = fuse.search(searchValue);

  const characterResults = searchValue
    ? results.map(result => result.item)
    : trends;
  return isAuth ? (
    <div>
      <div className={s.wrap}>
        {/* <button onClick={() => dispatch(removeUser())}>
          Logout from {email}
        </button> */}
        <ul className={s.list}>
          {characterResults.map(
            ({
              id,
              original_title,
              poster_path,
              vote_average,
              release_date,
            }) => (
              <Link to={`movies/${id}`} key={id} className={s.item}>
                <img
                  src={poster_path ? `${IMAGE}${poster_path}` : imageDefault}
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
  ) : (
    <div>{navigation('/login')}</div>
  );
};

export default Home;
