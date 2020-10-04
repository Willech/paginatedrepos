import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Row, Table, Spinner } from 'react-bootstrap';
import { TableRow } from './TableRow';
import { TableHeader } from './TableHeader';
import { PaginationComponent } from './Pagination';

const PAGE_LIMIT = 20;

export const RepoTable = (props) => {
    const [ repoData, setData ] = useState({items: []});
    const [ currentPage, setPage ] = useState(0);
    const [ currentRepos, setCurrentRepos ] = useState([]);

    const onPageChange = (number) => {
        setPage(number);
    }

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await axios("https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100");
            setData(response.data);
        };
        fetchRepos();
    }, [])

    useEffect(() => {
        let offset = (currentPage === 0) ? 0 : currentPage * PAGE_LIMIT;

        setCurrentRepos(repoData.items.slice(offset, offset + PAGE_LIMIT))
    }, [repoData, currentPage])

    useEffect(() => {
        let offset = (currentPage === 0) ? 0 : currentPage * PAGE_LIMIT;

        setCurrentRepos(repoData.items.slice(offset, offset + PAGE_LIMIT))
    }, [currentPage, repoData.items])

    return (
        <Container>
            <Row>
            {repoData.items.length < 1 && (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
            )}
            {repoData.items.length > 0 && (
                        <Table striped bordered hover responsive size="sm">
                            <TableHeader />
                            <tbody>
                                {currentRepos.map((repo, index) => {
                                    return <TableRow key={index} rank={(currentPage*PAGE_LIMIT) + index + 1} repoObject={repo} />
            })}
                            </tbody>
                        </Table> 
            )}
            </Row>
            <Row>
                <PaginationComponent onPageChangeClick={onPageChange} currentPage={currentPage} totalElements={repoData.items.length} elementsPerPage={PAGE_LIMIT}/>
            </Row>
        </Container>
    )
}
