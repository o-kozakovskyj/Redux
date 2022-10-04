import React from 'react';

const Pagination = ({ currentPage, totalItems, goPrev, goNext, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 1 ? '←' : '';
  const isNextPageAvailable = currentPage >= Math.ceil(totalItems / itemsPerPage) ? '' : '→';

  return (
    <div className="pagination">
      <button type="button" className="btn" disabled={!isPrevPageAvailable} onClick={goPrev}>
        {isPrevPageAvailable}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button type="button" className="btn" disabled={!isNextPageAvailable} onClick={goNext}>
        {isNextPageAvailable}
      </button>
    </div>
  );
};

export default Pagination;
