import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { LayoutContext } from '../components/Layout';

const defaultNetworkStyles = `
    cursor: default;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 14px;
    height: 16px;
    &:hover {
        font-size: 16px;
        transition: font-size .2s;
    };
`;

const Table = styled(DataTable)`
    & * ::-webkit-scrollbar {
        width: 1px;
    };
    & * ::-webkit-scrollbar-track {
        background: white;
    };
    & * ::-webkit-scrollbar-thumb {
        background: var(--poetry_brand);
        border: 1px solid var(--poetry_brand);
    };
    & .p-paginator-bottom {
        border-width: 0 0 0 0;
    };
    & > * input {
        height: 20px !important;
        color: var(--poetry_brand);
    };
    & .ethereum {
        background: -webkit-linear-gradient(74.5deg, grey, black);
        ${defaultNetworkStyles}
    };
    & .harmony {
        background: -webkit-linear-gradient(74.5deg, #00aee9, #69fabd);
        ${defaultNetworkStyles}
    };
    & .polkadot {
        background: -webkit-linear-gradient(74.5deg, #E5007A, black);
        ${defaultNetworkStyles}
    };
`;

const networkTemplate = (data) => Object.keys(data.networks).map(x => data.networks[x] ? <div className={x}>{x}</div> : '');

const columns = [
    { field: 'name', header: 'Name', filterField: 'name', filter: true, filterPlaceholder: 'Search by folder', sortable: true },
    { field: 'files.length', header: 'Files', filterField: 'fileCount', filter: true, sortable: true },
    { field: 'lastUpdated', header: 'Last Updated', filterField: 'fileCount', filter: true, sortable: true },
    { field: 'createdDate', header: 'Created', filterField: 'fileCount', filter: true, sortable: true },
    { field: 'networks', header: 'Networks', filterField: 'fileCount', filter: true, body: networkTemplate }
];

function Folders() {
    const { folders } = useContext(LayoutContext);
    const tableProps = {
        value: folders,
        className: 'p-datatable-sm',
        emptyMessage: 'No folders found',
        scrollable: true,
        scrollHeight: '61vh', 
        removableSort: true,
        paginator: true,
        paginatorTemplate: 'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords}',
        rows: 20,
        rowsPerPageOptions: [20,40,80, 100]
    };
    return(
        <Table {...tableProps}>
            {
                columns.map(column => <Column {...column} />)
            }
        </Table>
    );
}

export default Folders;
