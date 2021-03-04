import React from 'react';

const PaginationPageNumbers = ({ pageNumber, currentPageNumber, onClick }) => {
  return (
    <li className="page-item mr-1">
      <button
        className={`page-link${
          currentPageNumber === pageNumber ? ' button-outline' : ''
        }`}
        onClick={() => onClick(pageNumber)}
      >
        {pageNumber + 1}
      </button>
    </li>
  );
};

export default PaginationPageNumbers;
