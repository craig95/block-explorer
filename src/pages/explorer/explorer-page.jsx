import React, { useEffect } from 'react';
import styled from 'styled-components';

import SearchBar from './components/search-bar';
import Ticker from './components/ticker';
import BlocksTable from './components/blocks-table';

const ExplorerPageWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;

    @media screen and (max-width: 992px) {
        flex-direction: column;
    }
`;

const SidebarWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    @media screen and (min-width: 1024px) {
        flex: 0.3;
    }

    @media screen and (max-width: 992px) {
        flex: 1;
        flex-direction: column;
    }
`;

const MainContentWrapper = styled.div`
    flex: 1;
    flex-direction: column;
`;

const PageTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;

    @media screen and (min-width: 1024px) {
        margin-bottom: 1.5rem;
    }
`;

const ExplorerPage = () => {
    useEffect(() => {});

    return (
        <ExplorerPageWrapper>
            <SidebarWrapper>
                <PageTitle>Block Explorer</PageTitle>
                <Ticker />
            </SidebarWrapper>
            <MainContentWrapper>
                <SearchBar />
                <BlocksTable />
            </MainContentWrapper>
        </ExplorerPageWrapper>
    );
};

export default ExplorerPage;
