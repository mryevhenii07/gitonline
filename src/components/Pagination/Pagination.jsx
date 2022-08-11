import React from 'react';
import ReactPaginate from 'react-paginate';

import s from './Pagination.module.css';

const Pagination = ({ onChangePage }) => {
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
