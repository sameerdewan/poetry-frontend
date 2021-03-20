import React from 'react';
import styled from '@emotion/styled';
import { TabView,TabPanel } from 'primereact/tabview';
import {Steps} from 'primereact/steps';
import { Card } from 'primereact/card';

const Tabs = styled(TabView)`
    width: 100% !important;
`;

const colorConverter = (state) => {
    const inQueue = ``;
    const inProgress = `
        & ul > li:nth-child(2) > a > .p-steps-number  {
            background-color: #1F95F3 !important;
        };
    `;
    const failed = `
        & ul > li:nth-child(3) > a > .p-steps-number  {
            background-color: #D32E2F !important;
        };
    `;
    const completed = `
        & ul > li:nth-child(4) > a > .p-steps-number  {
            background-color: #679F38 !important;
        };
    `;
    switch (state) {
        case 0:
            return inQueue;
        case 1:
            return inProgress;
        case 2:
            return failed;
        case 3:
            return completed;
        default:
            break;
    }
};

const PoetrySteps = styled(Steps)`
    width: 100% !important;
    margin: auto auto;
    max-width: 1200px;
    ${props => colorConverter(props.activeIndex)}
`;

const DataContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto auto;
    max-height: 60vh;
    display: flex;
    justify-content: space-between;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: space-between;
`;

const SmallCard = styled(Card)`
    margin: auto auto;
    width: 90%;
    min-height: 30vh;
    max-height: 300px;
    &:nth-of-type(1) {
        background-color: #B4E5FC;
    };
    &:nth-of-type(2) {
        background-color: rgb(103,58,181, .3);
    };
`;

const TallCard = styled(Card)`
    min-height: 62.2vh;
    max-height: 600px;
    width: 90%;
    background-color: rgb(158,157,158, .3);
`;

function File() {
    const steps = [
        { label: 'In Queue' },
        { label: 'In Progress' },
        { label: 'Failed' },
        { label: 'Completed' }
    ];
    return (
        <React.Fragment>
            <Tabs>
                <TabPanel header='Ethereum'>
                    <PoetrySteps model={steps} activeIndex={1}/>
                    <DataContainer>
                        <FlexContainer>
                            <SmallCard header='Information'>
                                name: cockroachCyan.bin
                                <br/>
                                hash: a1293u129dj3dj23d2dwefd24r
                                <br/>
                                date: 2020-12-23T22:37:56.959Z
                                <br/>
                                createdBy: API
                                <br/>
                                identifer: werwerwer134r234234
                                <br/>
                            </SmallCard>
                            <br/>
                            <SmallCard header='Blockchain Information'>
                                name: cockroachCyan.bin
                                <br/>
                                hash: a1293u129dj3dj23d2dwefd24r
                                <br/>
                                date: 2020-12-23T22:37:56.959Z
                                <br/>
                                createdBy: API
                                <br/>
                                identifer: werwerwer134r234234
                                <br/>
                            </SmallCard>
                        </FlexContainer>
                        <TallCard header='Notes'>
                            
                        </TallCard>
                    </DataContainer>
                </TabPanel>
                <TabPanel header='Harmony'>
                    <PoetrySteps model={steps} activeIndex={0}/>
                </TabPanel>
                <TabPanel header='Polkadot'>
                    <PoetrySteps model={steps} activeIndex={2}/>
                </TabPanel>
            </Tabs>
        </React.Fragment>
    );
}

export default File;
