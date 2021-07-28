import React from 'react';
import styled from 'styled-components';

const NotFoundPageWrapper = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 15rem;
    font-weight: 700;
    margin: 0;
`;

const Subtitle = styled.h2`
    font-size: 6rem;
    margin: 0;
`;

const NotFoundPage = () => (
    <NotFoundPageWrapper>
        <Title>404</Title>
        <Subtitle>Not Found</Subtitle>
    </NotFoundPageWrapper>
);

export default NotFoundPage;
