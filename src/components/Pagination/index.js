import React from 'react';
import './pagination.css';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pageList">
                {pageNumbers.map(number => {
                    return (
                        <li key={number} className="pageLink">
                            <a onClick={() => paginate(number)} href={`#${number}`}>{number}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination;