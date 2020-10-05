import React from 'react';
import {Container } from 'react-bootstrap';

export const PageHeader = () => {
    return (
        <div className="mb2 mt1">
            <Container>
                <h2>GitHub top JavaScript repositories</h2>
            </Container>
        </div>
    )
}

export default PageHeader;