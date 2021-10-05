import React from 'react';
import {Container } from 'react-bootstrap';

export const PageHeader = (props) => {
    return (
        <div className="mb2 mt1">
            <Container>
                <h2>{props.title}</h2>
                <p>*prices in USD</p>
            </Container>
        </div>
    )
}

export default PageHeader;