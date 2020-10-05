import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Row, Table, Spinner } from 'react-bootstrap';
import { TableRow } from './TableRow';
import { TableHeader } from './TableHeader';
import { PaginationComponent } from './Pagination';

export const RepoTable = (props) => {
    const [ repoData, setData ] = useState([]);
    const [ currentPage, setPage ] = useState(0);
    const { pageLimit } = props;
    const offset = currentPage * pageLimit;

    const onPageChange = (number) => {
        setPage(number);
    }

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await axios("https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100");
            setData(response.data.items);
        };
        fetchRepos();
    }, [])

    return (
        <Container>
            <Row>
            {repoData.length < 1 && (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
            )}
            {repoData.length > 0 && (
                        <Table striped bordered hover responsive size="sm">
                            <TableHeader />
                            <tbody>
                                {repoData.slice(offset, offset + pageLimit).map((repo, index) => {
                                    return <TableRow key={index} rank={(currentPage*pageLimit) + index + 1} repoObject={repo} />
            })}
                            </tbody>
                        </Table> 
            )}
            </Row>
            <Row>
                <PaginationComponent onPageChangeClick={onPageChange} currentPage={currentPage} totalElements={repoData.length} elementsPerPage={pageLimit}/>
            </Row>
        </Container>
    )
}
