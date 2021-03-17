import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { LayoutContext } from '../components/Layout';

const Table = styled(DataTable)`
    & > * input {
        height: 20px !important;
        color: var(--poetry_brand);
    };
`;

const columns = [
    { field: 'name', header: 'Name', filterField: 'name', filter: true, filterPlaceholder: 'Search by folder' },
    { field: 'files.length', header: 'Files', filterField: 'fileCount', filter: true },
    { field: 'lastUpdated', header: 'Last Updated', filterField: 'fileCount', filter: true },
    { field: 'createdDate', header: 'Created', filterField: 'fileCount', filter: true },
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
