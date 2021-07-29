import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getBlockByHash } from '../../reducers/blocks-reducer/blocks.actions';
import BlockDetails from './components/block-details';
import { BitcoinIcon } from '../../common-components/icons';

const PageHeaderWrapper = styled.div`
    padding: 0 0 3rem 0;
`;

const PageTitleWrapper = styled.div`
    padding: 0 0 1rem 0;
    border-bottom: 1px solid rgb(223, 227, 235);
    display: flex;
    align-items: center;
`;

const PageTitle = styled.h1`
    margin: 0 0 0 1rem;
    color: rgb(53, 63, 82);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: none;
    font-style: normal;
    font-family: Inter, Helvetica, sans-serif;
`;

const PageTitleSpan = styled.span`
    color: rgb(103, 113, 133);
`;

const BlockDepthText = styled.p`
    color: rgb(53, 63, 82);
    margin: 0;
    padding: 0.5rem 0 0 0;
    font-weight: 500;
    font-size: 14px;
    text-transform: none;
    font-style: normal;
    font-family: Inter, Helvetica, sans-serif;
`;

const BlockPage = () => {
    const dispatch = useDispatch();
    const { blockHash } = useParams();
    const { isLoading, selectedBlock, selectedBlockFetchError } = useSelector(
        (state) => state.blocksReducer
    );

    useEffect(() => {
        if (!blockHash) {
            return;
        }

        dispatch(getBlockByHash(blockHash));
    }, [blockHash, dispatch]);

    return (
        <>
            <PageHeaderWrapper>
                <PageTitleWrapper>
                    <BitcoinIcon />
                    <PageTitle>
                        <PageTitleSpan>BTC /</PageTitleSpan> Block
                    </PageTitle>
                </PageTitleWrapper>
                <BlockDepthText>
                    {selectedBlock &&
                        !isLoading &&
                        !selectedBlockFetchError &&
                        `Block at depth ${selectedBlock.height} in the Bitcoin blockchain`}
                </BlockDepthText>
            </PageHeaderWrapper>
            <BlockDetails />
        </>
    );
};

export default BlockPage;
