import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Spinner from '../../../common-components/spinner';
import Error from '../../../common-components/error';

const SpinnerWrapper = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 576px) {
        height: 500px;
    }
`;

const PageTitle = styled.h1`
    font-size: 1.5rem;
    color: rgb(53, 63, 82);
    font-weight: 700;
    text-transform: none;
    font-style: normal;
    font-family: Inter, Helvetica, sans-serif;
`;

const TableWrapper = styled.div`
    display: block;
    overflow-x: auto;
    width: 100%;
`;

const Table = styled.table`
    overflow: auto;
    border-collapse: collapse;
    width: 100%;
    table-layout: auto;
`;

const TableHead = styled.thead`
    border-bottom: 1px solid rgb(240, 242, 247);
`;

const TableHeadCell = styled.th`
    font-weight: 500;
    font-size: 12px;
    text-transform: none;
    font-style: normal;
    font-family: Inter, Helvetica, sans-serif;
    color: rgb(103, 113, 133);
    padding: 0.75rem 0px;
    text-align: start;
`;

const TableRow = styled.tr`
    border-bottom: 1px solid rgb(240, 242, 247);
`;

const TableRowCell = styled.td`
    font-weight: 500;
    font-size: 14px;
    text-transform: none;
    font-style: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: Inter, Helvetica, sans-serif;
    color: rgb(53, 63, 82);
    padding: 0.75rem 0px;
    text-align: start;
`;

const TableLink = styled(Link)`
    font-weight: 500;
    font-size: 14px;
    text-transform: none;
    font-style: normal;
    font-family: Inter, Helvetica, sans-serif;
    text-decoration: none;
    color: rgb(12, 108, 242);
`;

const ErrorWrapper = styled.div`
    margin-top: 3rem;
`;

const BlocksTable = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Height',
                accessor: 'height',
            },
            {
                Header: 'Hash',
                accessor: (data) => {
                    const hash = _.get(data, 'hash', '');
                    const abbreviatedHash = `0..${hash.substring(
                        hash.search(/[^0]+/),
                        hash.length
                    )}`;
                    return (
                        <TableLink to={`/block/${hash}`}>
                            {abbreviatedHash}
                        </TableLink>
                    );
                },
            },
            {
                Header: 'Mined',
                accessor: (data) =>
                    moment(_.get(data, 'time', 0) * 1000).fromNow(true),
            },
            {
                Header: 'Miner',
                accessor: (data) => _.get(data, 'minerName', 0),
            },
            {
                Header: 'Size',
                accessor: 'size',
            },
        ],
        []
    );

    const { isLoading, blocks, blocksFetchError } = useSelector(
        (state) => state.blocksReducer
    );
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data: blocks });

    if (isLoading) {
        return (
            <SpinnerWrapper>
                <Spinner />
            </SpinnerWrapper>
        );
    }

    if (blocksFetchError) {
        return (
            <ErrorWrapper>
                <Error>{blocksFetchError}</Error>
            </ErrorWrapper>
        );
    }

    return (
        <>
            <PageTitle>Latest blocks</PageTitle>
            <TableWrapper>
                <Table {...getTableProps()}>
                    <TableHead>
                        {_.map(headerGroups, (headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {_.map(headerGroup.headers, (column) => (
                                    <TableHeadCell {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </TableHeadCell>
                                ))}
                            </tr>
                        ))}
                    </TableHead>
                    <tbody {...getTableBodyProps()}>
                        {_.map(rows, (row) => {
                            prepareRow(row);
                            return (
                                <TableRow {...row.getRowProps()}>
                                    {_.map(row.cells, (cell) => (
                                        <TableRowCell {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </TableRowCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </tbody>
                </Table>
            </TableWrapper>
        </>
    );
};

export default BlocksTable;
