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

const PoetryMasterFlex = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: row;
    max-height: calc(100vh - 310px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 1px;
    };
    &::-webkit-scrollbar-track {
        background: white;
    };
    &::-webkit-scrollbar-thumb {
        background: var(--poetry_brand);
        border: 1px solid var(--poetry_brand);
    };
`;

const PoetryFlex = styled.section`
    display: flex;
    flex-direction: column;
    & span {
        display: flex;
        width: fit-content;
        & > * {
            margin: 0px 10px;
            justify-content: space-between;
        };
    };
`;

const PoetryStatusBox = styled(Card)`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    margin: 5px;
    .p-card-header {
        padding: 20px;
        background: rgb(103,58,181, .1) !important;
        &:before {
            content: '\\${props => props.icon}  ';
            font-family: 'primeicons';
        };
        color: var(--poetry_brand);
    };
    .p-card-body {
        padding: 0 10px !important;
    };
    & small {
        color: var(--poetry_brand) !important;
        font-weight: 100;
    };
    & code {
        border: 1px solid rgb(103,58,181, .5) !important;
        padding: 3px 2px;
    };
    & td {
        padding: 4px;
    };
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
                    <PoetryMasterFlex>
                        <PoetryFlex>
                            <PoetryStatusBox header='File Information' height='230' width='600' icon='e9a8'>
                                <table>
                                    <tr>
                                        <td><small>Name:</small></td>
                                        <td><code>cockroachCyan.bin</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Hash:</small></td>
                                        <td><code>8ac07ad5dd5c10cc9002dcf2b62d9c8ff32885237cc40b26060e5f327f7e4e29</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Uploaded:</small></td>
                                        <td><code>2020-12-24T03:37:56.959Z</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Origin:</small></td>
                                        <td><code>API</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Identifier:</small></td>
                                        <td><code>8ac07ad5dd5c10cc9002dcf2b62d9c8ff32885237cc40b26060e5f327f7e4e29</code></td>
                                    </tr>
                                </table>
                            </PoetryStatusBox>
                            <PoetryStatusBox header='Blockchain Details' height='230' width='600' icon='e918'>
                                <table>
                                    <tr>
                                        <td><small>Name:</small></td>
                                        <td><code>cockroachCyan.bin</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Hash:</small></td>
                                        <td><code>8ac07ad5dd5c10cc9002dcf2b62d9c8ff32885237cc40b26060e5f327f7e4e29</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Uploaded:</small></td>
                                        <td><code>2020-12-24T03:37:56.959Z</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Origin:</small></td>
                                        <td><code>API</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Identifier:</small></td>
                                        <td><code>8ac07ad5dd5c10cc9002dcf2b62d9c8ff32885237cc40b26060e5f327f7e4e29</code></td>
                                    </tr>
                                </table>
                            </PoetryStatusBox>
                            <PoetryStatusBox header='Tags' height='230' width='600' icon='e95d'>
                                <table>
                                    <tr>
                                        <td><small>Name:</small></td>
                                        <td><code>cockroachCyan.bin</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Hash:</small></td>
                                        <td><code>8ac07ad5dd5c10cc9002dcf2b62d9c8ff32885237cc40b26060e5f327f7e4e29</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Uploaded:</small></td>
                                        <td><code>2020-12-24T03:37:56.959Z</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Origin:</small></td>
                                        <td><code>API</code></td>
                                    </tr>
                                    <tr>
                                        <td><small>Identifier:</small></td>
                                        <td><code>8ac07ad5dd5c10cc9002dcf2b62d9c8ff32885237cc40b26060e5f327f7e4e29</code></td>
                                    </tr>
                                </table>
                            </PoetryStatusBox>
                        </PoetryFlex>
                        <PoetryFlex>
                            <PoetryStatusBox header='Notes' height='770' width='300' icon='e942' />
                        </PoetryFlex>
                        <PoetryFlex>
                            <PoetryStatusBox header='Actions' height='770' width='300' icon='e95c' />
                        </PoetryFlex>
                    </PoetryMasterFlex>
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
