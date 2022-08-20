import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchSearchFilm, fetchTrending } from '../../services/movie-api';

import s from './Pagination.module.css';

const Pagination = ({ onChangePage }) => {
  const [totalPage, setTotalPage] = useState(0);

  // useEffect(() => {
  //   fetchSearchFilm().then(console.log);
  // }, [totalPage]);

  return (
    <ReactPaginate
      className={s}
      breakLabel="..."
      nextLabel=" >"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={20}
      pageCount={7}
      previousLabel="< "
      renderOnZeroPageCount={null}
      className={s.pagination}
      pageLinkClassName={s.pageLink}
      pageClassName={s.item}
      activeLinkClassName={s.activeLink}
      nextLinkClassName={s.nextLink}
      previousLinkClassName={s.previousLink}
    />
  );
};

export default Pagination;
