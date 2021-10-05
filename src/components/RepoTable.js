import React, { useEffect, useState } from 'react';

import { Alert, Container, Row, Table, Spinner } from 'react-bootstrap';
import { TableRow } from './TableRow';
import { TableHeader } from './TableHeader';
import { PaginationComponent } from './Pagination';
import useGetBitcoinData from '../api/useGetBitcoinData';

export const RepoTable = (props) => {
    const [ fetchedData, setData ] = useState([]);
    const [ currentPage, setPage ] = useState(0);

    const { pageLimit } = props;
    const offset = currentPage * pageLimit;

    const [btcResponse, isLoading, error] = useGetBitcoinData();

    const onPageChange = (number) => {
        setPage(number);
    }

    useEffect(() => {
        setData(btcResponse);
    }, [btcResponse])

    return (
        <Container>
            <Row>
            {isLoading && (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
            )}
            {(!isLoading && !error) && (
                <>
                        <Table striped bordered hover responsive size="sm">
                            <TableHeader />
                            <tbody>
                                {fetchedData.slice(offset, offset + pageLimit).map(
                                    (btcObject, index) => {
                                    const prevObj = offset+index < fetchedData.length-1 ? fetchedData[offset + index + 1] : btcObject
                                    return <TableRow key={index} btcObject={btcObject} prevBtcObject={prevObj}/>
            })}
                            </tbody>
                        </Table> 
                                    <PaginationComponent onPageChangeClick={onPageChange} currentPage={currentPage} totalElements={fetchedData.length} elementsPerPage={pageLimit}/>
                </>
            )}
            {error && (
                <Alert>{error.message}</Alert>
            )}
            </Row>
        </Container>
    )
}
