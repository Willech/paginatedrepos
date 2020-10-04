import React from 'react';
import { Pagination } from 'react-bootstrap'

export const PaginationComponent = (props) => {
    const { totalElements, elementsPerPage } = props;
    const totalPages = Math.ceil(totalElements/elementsPerPage);
    const paginationItems = [...Array(totalPages).keys()]

    return(
        <div className="mt1">
            <Pagination>
                {paginationItems.map(number => {
                    return <Pagination.Item 
                        key={number} 
                        active={number === props.currentPage} 
                        onClick={e => props.onPageChangeClick(number)}>
                            {number + 1}
                        </Pagination.Item>
                })}
            </Pagination>
        </div>
    )

}

export default PaginationComponent;