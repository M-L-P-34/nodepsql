import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div>
      <h2>Pagination Component</h2>
      <button disabled={currentPage === 1} onClick={() => handlePageChange('prev')}>Previous</button>
      <span>{currentPage}</span>
      <button disabled={currentPage === totalPages} onClick={() => handlePageChange('next')}>Next</button>
    </div>
  );
};

export default Pagination;
