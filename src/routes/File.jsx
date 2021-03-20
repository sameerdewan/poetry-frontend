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
