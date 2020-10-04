import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Tablerow } from './Tablerow';
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
            console.log(response.data);
            setData(response.data);
        };
        fetchRepos();
    }, [])

    useEffect(() => {
        let offset = 0;
        if(currentPage != 0) {
            offset = currentPage * PAGE_LIMIT;
        }
        setCurrentRepos(repoData.items.slice(offset, offset + PAGE_LIMIT))
    }, [repoData])

    useEffect(() => {
        let offset = 0;
        if(currentPage != 0) {
            offset = currentPage * PAGE_LIMIT;
        }
        setCurrentRepos(repoData.items.slice(offset, offset + PAGE_LIMIT))
    }, [currentPage])

    return (
        <Container>
            <Row>
                <Table striped bordered hover responsive size="sm">
                    <TableHeader />
                    {currentRepos.map(repo => {
                        return <Tablerow repoObject={repo} />
                    })}
                    <PaginationComponent onPageChangeClick={onPageChange} currentPage={currentPage} totalElements={repoData.items.length} elementsPerPage={PAGE_LIMIT}/>
                </Table> 
            </Row>
        </Container>
    )
}