import React from 'react'
import '../css/PostList.css'
import PropTypes from 'prop-types' 


export const Pagination =  ({pagesNumber, paginate, currentPage}) => {

    const pageAmount = new Array(pagesNumber).fill().map((el, index) => index+1)

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

Pagination.propTypes = {
    pagesNumber: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
}