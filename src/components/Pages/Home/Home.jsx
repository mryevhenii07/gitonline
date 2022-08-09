import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrending, fetchSearchFilm } from '../../../services/movie-api';
import Pagination from '../../Pagination/Pagination';
import s from './Home.module.css';
import SideBar from '../../Sidebar/SideBar';
import Ratings from '../../Rating/Rating';
import { SearchContext } from '../../../App';
import Fuse from 'fuse.js';
const IMAGE = 'https://image.tmdb.org/t/p/w500/';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [trends, setTrends] = useState([]);
  const [query, setQuery] = useState([]);

  const { searchValue } = useContext(SearchContext);

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
  // console.log('results', results);
  // console.log('trends', trends);
  return (
    <div>
      <div className={s.wrap}>
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
