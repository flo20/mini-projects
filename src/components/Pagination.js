import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
      <div>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <div key={number}>
              <a href="#" className="page-link">
                {number}
              </a>
            </div>
          ))}
        </ul>
      </div>
    );
}
