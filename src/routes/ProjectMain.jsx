import React from 'react';
import styled from '@emotion/styled';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'primeicons/primeicons.css';
import 'react-calendar-heatmap/dist/styles.css';

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

const Container = styled.div`
    margin-top: 10px;
    width: 100%;
    & .repogrid-header {
        color: var(--poetry_brand);
        font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
        margin-left: 8px;
        font-size: 1rem;
    };
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
    & .p-datatable-tbody > tr:nth-child(even) {
        background: rgb(103,58,181, .04) !important;
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

const HeatmapContainer = styled.section`
    width: 75% !important;
    min-width: 550px !important;
    max-width: 800px !important;
    margin: auto auto !important;
    margin-top: 40px !important;
    padding-bottom: 30px;
`;

const RepoGrid = styled.section`
    display: flex;
    max-width: 895px;
    margin: auto auto;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 20px;
    transition: .5s all;
    cursor: pointer;
    .p-card {
        background: rgb(103,58,188, .1) !important;
    };
    .p-card: hover {
        & .p-card-title:before {
            content: '\\e964';
            font-family: 'primeicons';
        };
    };
`;

const RepoCard = styled(Card)`
    min-height: 100px;
    max-height: 100px;
    min-width: 440px;
    max-width: 440px;
    font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    color: rgba(0, 0, 0, 0.87) !important;
    font-weight: 100 !important;
    & .p-card-title {
        color: var(--poetry_brand);
        font-size: 18px;
        font-weight: 100 !important;
        padding: 1rem;
    };
    & .p-card-title:before {
        content: '\\e963';
        font-family: 'primeicons';
    };
    & .p-card-body {
        padding: 0 1rem;
        font-size: 16px;
    };
`;

const networkTemplate = ({ network }) => <div className={network}>{network}</div>;

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
    { field: 'fileName', header: 'File Name' },
    { field: 'status', header: 'Status', body: formatStatus },
    { field: 'network', header: 'Network', body: networkTemplate },
    { field: 'date', header: 'Date' },
];

const dummyRows = [
    { fileName: 'test1.pdf', status: 'in progress', network: 'harmony', date: '2021-03-19T20:09:33.137Z'},
    { fileName: 'test1.pdf', status: 'completed', network: 'ethereum', date: '2021-03-19T20:09:33.137Z'},
    { fileName: 'test1.pdf', status: 'in progress', network: 'polkadot', date: '2021-03-19T20:09:33.137Z'},
    { fileName: 'test2.pdf', status: 'in progress', network: 'harmony', date: '2021-03-19T20:09:33.137Z'},
    { fileName: 'test3.pdf', status: 'completed', network: 'ethereum', date: '2021-03-19T20:09:33.137Z'},
    { fileName: 'test2.pdf', status: 'in progress', network: 'polkadot', date: '2021-03-19T20:09:33.137Z'},
    { fileName: 'test2.pdf', status: 'in progress', network: 'ethereum', date: '2021-03-19T20:09:33.137Z'},
    { fileName: 'test3.pdf', status: 'completed', network: 'polkadot', date: '2021-03-19T20:09:33.137Z'},
    { fileName: 'test3.pdf', status: 'completed', network: 'harmony', date: '2021-03-19T20:09:33.137Z'},
];

function ProjectMain() {
    return (
        <Container>
            <span className='repogrid-header'>Recently updated folders</span>
            <RepoGrid>
                <RepoCard title=' repo1'>test</RepoCard>
                <RepoCard title=' repo1'>test</RepoCard>
            </RepoGrid>
            <RepoGrid>
                <RepoCard title=' repo1'>test</RepoCard>
                <RepoCard title=' repo1'>test</RepoCard>
            </RepoGrid>
            <br />
            <span className='repogrid-header'><b>4881</b> compositions in the last year</span>
            <HeatmapContainer>
                <CalendarHeatmap 
                    startDate={new Date('2015-04-01')}
                    endDate={new Date('2016-04-01')}
                    values={[
                        { date: '2016-01-01', count: 0 },
                        { date: '2016-01-22', count: 1002 },
                        { date: '2016-01-30', count: 38 },
                        // ...and so on
                    ]}
                />
            </HeatmapContainer>
            <span className='repogrid-header'>Latest Compositions</span>
            <DataTable value={dummyRows} scrollable scrollHeight={'20vh'} className='p-datatable-sm p-datatable-striped'>
                    {
                        columns.map(c => {
                            return <Column {...c} />
                        })
                    }
            </DataTable>
        </Container>
    );
}

export default ProjectMain;
