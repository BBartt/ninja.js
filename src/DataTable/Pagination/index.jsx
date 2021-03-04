import React from 'react';

import PaginationPageNumbers from './PaginationPageNumbers';

const Pagination = ({ currentPageNumber, totalNumberOfPages, onClick }) => {
  const pages = [...Array(totalNumberOfPages).keys()].map(pageNumber => (
    <PaginationPageNumbers
      currentPageNumber={currentPageNumber}
      onClick={num => onClick(num)}
      pageNumber={pageNumber}
      key={pageNumber}
    />
  ));

  if (pages.length <= 1) return null;

  return <ul className="pagination">{pages}</ul>;
};

export default Pagination;
