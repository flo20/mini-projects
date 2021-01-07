import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, handlePageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <div key={number}>
            <a
              href="#"
              className="page-link"
              onClick={() => handlePageChange(number)}
            >
              {number}
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};
