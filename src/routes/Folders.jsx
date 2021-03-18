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
    { field: 'name', header: 'Name', filterField: 'name', filter: true, filterPlaceholder: 'Search by folder' },
    { field: 'files.length', header: 'Files', filterField: 'fileCount', filter: true },
    { field: 'lastUpdated', header: 'Last Updated', filterField: 'fileCount', filter: true },
    { field: 'createdDate', header: 'Created', filterField: 'fileCount', filter: true },
    { field: 'networks', header: 'Networks', filterField: 'fileCount', filter: true, body: networkTemplate }
];

function Folders() {
    const { folders } = useContext(LayoutContext);
    return(
        <Table value={folders} emptyMessage='No folders found' className='p-datatable-sm'>
            {
                columns.map(column => <Column {...column} />)
            }
        </Table>
    );
}

export default Folders;
