import React from 'react'

const Page = ({
    totalBooks,
    booksPerPage,
    setCurrentPage,
    currentPage}
    ) => {
        let pages = [];
    
        for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
            pages.push(i);
        }
    
        return (
            <div className='page'>
                {pages.map((page, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            className={page === currentPage ? "active" : ""}>
                            {page}
                        </button>
                    );
                })}
            </div>
        );
    };

export default Page