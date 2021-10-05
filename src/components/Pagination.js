import React from 'react';
import { Pagination } from 'react-bootstrap'

export const PaginationComponent = (props) => {
    const { totalElements, elementsPerPage, currentPage } = props;
    const totalPages = Math.ceil(totalElements/elementsPerPage);
    const paginationItems = [...Array(totalPages).keys()]

    return(
        <div>
            <Pagination>
                {paginationItems.map(number => {
                    return (
                        <Pagination.Item 
                            key={number} 
                            active={number === currentPage} 
                            onClick={e => props.onPageChangeClick(number)}>
                                {number + 1}
                        </Pagination.Item>
                    )
                })}
            </Pagination>
        </div>
    )

}

export default PaginationComponent;