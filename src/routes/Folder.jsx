import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { LayoutContext } from '../components/Layout';
import { useHistory, useLocation, useParams } from 'react-router';
import { getFolderFiles } from '../services/poetry-system';

const Table = styled(DataTable)`
    & * ::-webkit-scrollbar {
        width: 1px;
        height: 2px;
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
    & .p-datatable-tbody > tr:nth-child(even) {
        background: rgb(103,58,181, .04) !important;
    };
    & > * input {
        height: 20px !important;
        color: var(--poetry_brand);
    };
    & .overflow-field {
        max-width: 200px;
        overflow-x: scroll;
    };
`;

const formatStatus = ({status = 'none'}) => {
    let icon = '';
    let severity = '';
    if (status === 'completed') {
        severity = 'success'; 
        icon = 'pi-check';
    }
    else if (status === 'in progress') {
        severity = 'info'; 
        icon = 'pi-info-circle';
    }
    else if (status === 'failed') {
        severity = 'danger'; 
        icon = 'pi-exclamation-triangle';
    }

    if (status === 'none') {
        return <React.Fragment />;
    }
    
    return (
        <Tag 
            className='p-mr-2'
            value={status}
            severity={severity}
            icon={`pi ${icon}`}
        />
    );
};

const columns = [
    { field: 'fileName', header: 'Name', filterField: 'fileName', filter: true, filterPlaceholder: 'Search by file name', sortable: true },
    { field: 'ethereum.status', header: 'Ethereum', filterField: 'ethereum.status', filter: true, sortable: true, body: ({ ethereum = {} }) => formatStatus(ethereum) },
    { field: 'harmony.status', header: 'Harmony', filterField: 'harmony.status', filter: true, sortable: true, body: ({ harmony = {} }) => formatStatus(harmony) },
    { field: 'polkadot.status', header: 'Polkadot', filterField: 'polkadot.status', filter: true, sortable: true, body: ({ polkadot = {} }) => formatStatus(polkadot) },
    { field: 'hash', header: 'Hash', filterField: 'hash', filter: true, body: x => <div className='overflow-field'>{x.hash}</div> }
];

function Folder() {
    const { folders } = useContext(LayoutContext);
    const history = useHistory();
    const { pathname } = useLocation();
    const { folderName } = useParams();
    const [folder, setFolder] = useState({});
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const folder = folders.find(x => x.name === folderName);
        setFolder(folder);
    }, [folderName, folders]);
    useEffect(() => {
        (async () => {
            try {
                const folderId = folder?.id;
                if (!folderId) return;
                const files = await getFolderFiles(folderId);
                setFiles(files);
            } catch {}
        })();
    }, [folder?.id, folderName]);
    const tableProps = {
        value: files,
        className: 'p-datatable-sm p-datatable-striped',
        emptyMessage: 'No files found',
        scrollable: true,
        scrollHeight: '61vh', 
        removableSort: true,
        paginator: true,
        paginatorTemplate: 'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords}',
        rows: 20,
        rowsPerPageOptions: [20,40,80, 100],
        selectionMode: 'single',
        onSelectionChange: ({ value: { fileName } }) => history.push(`${pathname}/${fileName}`)
    };
    return (
        <Table {...tableProps}>
            {
                columns.map(column => <Column {...column} />)
            }
        </Table>
    );
}

export default Folder;
