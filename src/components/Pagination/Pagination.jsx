import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
// import {
//   fetchSearchFilm,
//   fetchTrending,
//   FetchWhichWatchFilm,
//   fetchSidebarFilms,
// } from '../../services/movie-api';

import s from './Pagination.module.css';

const Pagination = ({ onChangePage }) => {
  // const [totalPage, setTotalPage] = useState([]);

  // useEffect(() => {
  //   fetchTrending(1).then(res => console.log(res));
  // }, []);
  // console.log(totalPage);
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=" >"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={55}
      previousLabel="< "
      renderOnZeroPageCount={null}
      className={s.pagination}
      pageLinkClassName={s.pageLink}
      pageClassName={s.item}
      activeLinkClassName={s.activeLink}
      nextLinkClassName={s.nextLink}
      previousLinkClassName={s.previousLink}
      breakClassName={s.nextLink}
    />
  );
};

export default Pagination;
