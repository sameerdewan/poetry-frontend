import React from 'react';
import styled from '@emotion/styled';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = styled(DataTable)`
    & > * input {
        height: 20px !important;
        color: var(--poetry_brand);
    };
`;

const columns = [
    { field: 'folder', header: 'Name', filterField: 'name', filter: true, filterPlaceholder: 'Search by folder' },
    { field: 'fileCount', header: 'Files', filterField: 'fileCount', filter: true },
    { field: 'date', header: 'Created', filterField: 'created', filter: true },
    { field: 'lastUpdated', header: 'Last Updated', filterField: 'updated', filter: true },
];

function Folders() {
    return(
        <Table emptyMessage='No folders found' className='p-datatable-sm'>
            {
                columns.map(column => <Column {...column} />)
            }
        </Table>
    );
}

export default Folders;
