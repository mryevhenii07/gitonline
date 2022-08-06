import React from 'react';

import ReactPaginate from 'react-paginate';
// import s from './Pagination.module.css';
// import '../../App.css';
import './Pagination.css';

const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=" >"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={12}
      pageCount={5}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
