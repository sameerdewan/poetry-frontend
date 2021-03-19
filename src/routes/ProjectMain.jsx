import React from 'react';
import styled from '@emotion/styled';
import { Card } from 'primereact/card';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const Container = styled.div`
    margin-top: 10px;
    width: 100%;
    & .repogrid-header {
        color: var(--poetry_brand);
        font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
        margin-left: 15px;
        font-size: 1rem;
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
    .p-card: hover {
        background: rgb(103,58,188, .2) !important;
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
        font-family: poetry;
        color: var(--poetry_brand);
        padding: 1rem;
    };
    & .p-card-body {
        padding: 0 1rem;
    };
`;

function ProjectMain() {
    return (
        <Container>
            <span className='repogrid-header'>Recently updated folders</span>
            <RepoGrid>
                <RepoCard title='repo1'>test</RepoCard>
                <RepoCard title='repo1'>test</RepoCard>
            </RepoGrid>
            <RepoGrid>
                <RepoCard title='repo1'>test</RepoCard>
                <RepoCard title='repo1'>test</RepoCard>
            </RepoGrid>
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
        </Container>
    );
}

export default ProjectMain;
