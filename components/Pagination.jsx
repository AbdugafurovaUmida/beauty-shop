import React from 'react';
import styles from "../styles/Pagination.module.css"



const Pagination = ({postsPerPage, totalPosts, paginate, currentPage, previousPage, nextPage }) => {
    const pageNumbers = [];
 
    

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
 

    return (
        <div className={styles.paginationContainer}>
        <ul className={styles.pagination}>
         <button onClick={previousPage}  className={styles.prevButton}>prev</button>
           {pageNumbers.map((number) => (
              <li
                 key={number}
                 onClick={() => paginate(number) }
                 className={currentPage == number ? styles.pageActive : styles.pageNumber}
              >
                 {number}
              </li>
           ))}
           <button onClick={nextPage}  className={styles.nextButton}>Next</button>
        </ul>
     </div>
  )
}

export default Pagination