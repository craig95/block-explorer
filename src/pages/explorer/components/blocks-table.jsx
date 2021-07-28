import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PageTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
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
                    return <Link to={`/block/${hash}`}>{abbreviatedHash}</Link>;
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
    const { blocks } = useSelector((state) => state.blocksReducer);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data: blocks });

    return (
        <>
            <PageTitle>Latest blocks</PageTitle>
            <table {...getTableProps()}>
                <thead>
                    {_.map(headerGroups, (headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {_.map(headerGroup.headers, (column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {_.map(rows, (row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {_.map(row.cells, (cell) => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default BlocksTable;
