import React from 'react';
import styles from "../styles/Pagination.module.css"

const Pagination = ({postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div className={styles.paginationContainer}>
        <ul className={styles.pagination}>
         <button className={styles.prevButton}>prev</button>
           {pageNumbers.map((number) => (
              <li
                 key={number}
                 onClick={() => paginate(number)}
                 className={styles.pageNumber}
              >
                 {number}
              </li>
           ))}
           <button className={styles.nextButton}>Next</button>
        </ul>
     </div>
  )
}

export default Pagination