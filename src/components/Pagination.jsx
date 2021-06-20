import React from 'react'
import '../css/PostList.css'


export const Pagination =  ({pagesNumber, paginate, currentPage}) => {
    
    const pageAmount = [];

    for(let i = 0; i < pagesNumber; i++) {
        pageAmount.push(i+1);
    }
    console.log("got", pageAmount)
    return (
        <nav>
            {
                pageAmount.map(number => {
                    return (
                        <button key={number} type="button" onClick={() => paginate(number)} className={currentPage === number ? "btnSelected" : "btnNav"} >{number}</button>
                    )
                })
            }
        </nav>
    )
}