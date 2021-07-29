import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import SearchBar from './components/search-bar';
import Ticker from './components/ticker';
import BlocksTable from './components/blocks-table';
import { getLatestBlocks } from '../../reducers/blocks-reducer/blocks.actions';

const NUMBER_OF_BLOCKS_TO_FETCH = 50;

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
        flex: 0.25;
    }

    @media screen and (max-width: 992px) {
        flex: 1;
        flex-direction: column;
    }
`;

const MainContentWrapper = styled.div`
    flex: 1;
    margin-top: 0.67em;
    flex-direction: column;
`;

const PageTitle = styled.h1`
    color: rgb(53, 63, 82);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: none;
    font-style: normal;
    font-family: Inter, Helvetica, sans-serif;

    @media screen and (min-width: 1024px) {
        margin-bottom: 1.5rem;
    }
`;

const ExplorerPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLatestBlocks(NUMBER_OF_BLOCKS_TO_FETCH));
    }, [dispatch]);

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
