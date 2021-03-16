import React, { useCallback, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import styled from '@emotion/styled';
import { Button } from 'primereact/button';
import { AutoComplete } from 'primereact/autocomplete';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Tree } from 'primereact/tree';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';
import { BreadCrumb } from 'primereact/breadcrumb';
import logoImage from '../../../images/poetry-white.svg';

function Layout({ children}) {
    const { projectId } = useParams();
    const { pathname } = useLocation();

    const [expanded, setExpanded] = useState(false);
    const [selectionKeys, setSelectionKeys] = useState();

    const formatTreeMenuData = useCallback(
        () => {

        },
        []
    );

    const onSelectTreeMenu = useCallback(
        () => {

        },
        []
    );

    const getActiveIndex = useCallback(
        () => {
            if (pathname.includes('/dashboard/projects/test/folders')) {
                window.poetryPreviousTabOpenIndex = 0;
                return 0;
            }
            return window.poetryPreviousTabOpenIndex;
        },
        [pathname]
    );

    const getSelectionKeys = useCallback(
        () => {
            // match to route
        },
        []
    );

    const goToSelectionKeyRoute = useCallback(
        () => {
            // check data payload, go to route matching key
        },
        []
    );

    return (
        <React.Fragment>
            <TopPanel>
                <Logo>
                    <LogoImage src={logoImage} />
                    <span>poetry</span>
                </Logo>
                <Taskbar>
                    <TBLeft>
                        <Button icon='pi pi-plus-circle' label='Folder' />
                    </TBLeft>
                    <TBMiddle>
                        <small>Project:</small> {projectId}
                    </TBMiddle>
                    <TBRight>
                        <AutoComplete size={25} placeholder='🔎 Search...'/>
                        <Avatar label='SE' shape='circle'/>
                    </TBRight>
                </Taskbar>
            </TopPanel>
            <Container>
                <SidePanel expanded={expanded}>
                    <Accordion activeIndex={getActiveIndex()}>
                        {
                            dummyTabs.map(dT =>         
                                <AccordionTab header={dT.header}>
                                    <Tree
                                        value={dT.data} 
                                        selectionKeys={selectionKeys}
                                        selectionMode="single" 
                                        onSelectionChange={e => setSelectionKeys(e.value)}
                                        onSelect={() => console.log(selectionKeys)}/>
                                </AccordionTab>
                            )
                        }
                    </Accordion>
                </SidePanel>
                <Main>
                    <Breadcrumbs />
                    <div style={{ margin: '10px', display: 'flex', justifyContent:'center' }}>
                        {children}
                    </div>
                </Main>
            </Container>
            <BottomSidePanel expanded={expanded}>
                <Button className="p-button-sm" icon='pi pi-arrow-left' iconPos='left' label='Projects' />
                <Button icon={`pi pi-angle-double-${expanded ? 'left' : 'right'}`} onClick={() => setExpanded(!expanded)} />
            </BottomSidePanel>
            <BottomPanel expanded={expanded}>
                <Pipeline />
                <Members members={['SE', 'AE', 'ND', 'TP', 'NS']}/>
            </BottomPanel>
        </React.Fragment>
    );
}

export default Layout;


const SidePanel = styled.section`
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 1px;
    };
    ::-webkit-scrollbar-track {
        background: white;
    };
    ::-webkit-scrollbar-thumb {
        background: var(--poetry_brand);
        border: 1px solid var(--poetry_brand);
    };
    height: calc(100vh - 100px);
    position: relative;
    min-width: ${props => props.expanded ? '400px' : '250px'};
    transition: min-width .5s;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    & .p-accordion-tab {
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
    };
    & .p-accordion-header-link {
        color: var(--poetry_brand) !important;
    };
    & .p-accordion .p-accordion-header .p-accordion-header-link {
        padding: 1rem !important;
    };
    & .p-tree {
        border: none !important;
        padding: 0 !important;
        font-size: 12px !important;
    };
    & .p-tree .p-tree-container .p-treenode,
      .p-accordion .p-accordion-content, 
      .p-tree .p-tree-container .p-treenode .p-treenode-content {
        padding: 0 !important;
    };
    & .p-tree-toggler-icon {
        font-size: 12px;
    };
`;

const Main = styled.section`
    width: 100%;
    transition: width .5s;
    & .p-breadcrumb {
        border: none !important;
    };
    & .p-breadcrumb ul li .p-menuitem-link .p-menuitem-text,
      .p-breadcrumb ul li .p-menuitem-link .p-menuitem-icon {
        color: var(--poetry_brand);
    };
    & .p-breadcrumb ul li.p-breadcrumb-chevron {
        margin: 0.2rem;
        color: var(--poetry_brand);
    };
`;

const BottomSidePanel = styled.footer`
    position: absolute;
    height: 50px;
    width: ${props => props.expanded ? '400px' : '250px'};
    transition: width .5s;
    background: var(--poetry_brand);
    box-shadow: rgba(0, 0, 0, 0.15) -7px 3px 3px 6px;
    display: flex;
    justify-content: space-between;
`;

const TopPanel = styled.header`
    background: var(--poetry_brand);
    border-bottom: 1px solid var(--poetry_brand);
    height: 50px;
    width: 100vw;
    font-family: poetry;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    display: flex;
    align-items: center; 
`;

const Logo = styled.section`
    display: flex;
    height: 25px;
    width: 80px;
    position: relative;
    left: 5px;
    top: -2px;
    & span {
        position: relative;
        top: 6px;
        left: 2px;
    };
`;

const LogoImage = styled.img`
    height: 25px;
    width: 25px;
`;

const Taskbar = styled.section`
    position: relative;
    top: -8px;
    left: 160px;
    width: 100%;
    height: 25px;
`;

const TBLeft = styled.section`
    position: relative;
    left: 0;
`;

const TBMiddle = styled.section`
    position: relative;
    left: 90px;
    top: -30px;
    width: calc(100% - 500px);
    text-align: center;
`;

const TBRight = styled.section`
    position: absolute;
    right: 170px;
    display: flex;
    justify-content: space-between;
    width: 310px;
    top: 5px;
    & > * input {
        height: 10px !important;
        position: relative;
        top: -2px;
        color: var(--poetry_brand);
        font-family: poetry;
    };
`;

const BottomPanel = styled.footer`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    color: white;
    width: calc(100vw - ${props => props.expanded ? '398.4px' : '249px'});
    left: ${props => props.expanded ? '398.4px' : '249px'};
    transition: all .5s;
    position: relative;
    bottom: 0;
    height: 50px;
`;

const PipelineContainer = styled.div`
    position: absolute;
    left: 20px;
    top: 12.5px;
    color: red;
    color: var(--poetry_brand);
    font-family: poetry;
`;

const MembersContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`;

const Container = styled.div`
    display: inline-flex;
    width: 100%;
`;

const data = [
    {
        "key": "view-all",
        "label": "View all",
        "icon": "pi pi-fw pi-eye",
        "selectable": true
    }
];

const dummyTabs = [
    { header: 'Folders', data },
    { header: 'Files', data },
    { header: 'Networks', data },
    { header: 'Logs', data },
    { header: 'API', data },
    { header: 'Subscription', data },
    { header: 'Settings', data },
];

const project = {
    folders: [
        { 
            id: '9b196d0fdc3037945c319d1626be90b5', 
            projectId: 'd31a09bc966ce5534900018a18b57897', 
            networks: { ethereum: true, harmony: false, polkadot: false },
            files: [
                { fileName: 'testFile1.pdf', hash: '9fa9b8869e16f1387384990d1a015033' },
                { fileName: 'testFile2.pdf', hash: '437ac6b048c9e33a19418c1c09234cee' },
                { fileName: 'testFile3.pdf', hash: '1a7eabab8176e92f4b9c980f88b43a04' },
                { fileName: 'testFile4.pdf', hash: '424b08a3f657e525b58108487bb17a95' },
                { fileName: 'testFile5.pdf', hash: 'd9ee7020e65fcb83e16eae96d9cdee12' }
            ]
        },
        { 
            id: 'a48eab2fd110d79b59bafe70ec42db7d', 
            projectId: 'f4bd428520528b2e3c4d01d454e706b9', 
            networks: { ethereum: true, harmony: true, polkadot: false },
            files: [
                { fileName: 'testFile6.pdf', hash: 'f22cbdcfdeee3086938a0d092e43d17f' },
                { fileName: 'testFile7.pdf', hash: 'c6faf881ffefe26fa52be5d9fedc6cc4' },
                { fileName: 'testFile8.pdf', hash: '22eed467f28c7098114e8bc6706aedfa' },
                { fileName: 'testFile9.pdf', hash: 'fa88b972a4711608b50567fddc1f2d9a' },
                { fileName: 'testFile10.pdf', hash: '015efce0df3d504dbbc1524fa72b6ed6' }
            ]
        },
        { 
            id: '0c0793d214dd75ccea1e3bd403320049', 
            projectId: 'f2b4192b9412e5f5f718cb9fe3e84e22', 
            networks: { ethereum: false, harmony: false, polkadot: true },
            files: [
                { fileName: 'testFile11.pdf', hash: '75dac279cca806f04c3f1f4b634b3e7b' },
                { fileName: 'testFile12.pdf', hash: '5d9c71a1addca31f72054aaa3be630fd' },
                { fileName: 'testFile13.pdf', hash: 'c492f4ecdfb18a9df0263511ae72e2d7' },
                { fileName: 'testFile14.pdf', hash: '1023472195cdf1dd6c73fc287d3d13d2' },
                { fileName: 'testFile15.pdf', hash: '8c83f4ab799f819efc64a961a7592443' }
            ]
        }
    ],
    networks: [
        {
            network: 'ethereum',
            files: [
                { fileName: 'testFile1.pdf', hash: '9fa9b8869e16f1387384990d1a015033' },
                { fileName: 'testFile2.pdf', hash: '437ac6b048c9e33a19418c1c09234cee' },
                { fileName: 'testFile3.pdf', hash: '1a7eabab8176e92f4b9c980f88b43a04' },
                { fileName: 'testFile4.pdf', hash: '424b08a3f657e525b58108487bb17a95' },
                { fileName: 'testFile5.pdf', hash: 'd9ee7020e65fcb83e16eae96d9cdee12' },
                { fileName: 'testFile6.pdf', hash: 'f22cbdcfdeee3086938a0d092e43d17f' },
                { fileName: 'testFile7.pdf', hash: 'c6faf881ffefe26fa52be5d9fedc6cc4' },
                { fileName: 'testFile8.pdf', hash: '22eed467f28c7098114e8bc6706aedfa' },
                { fileName: 'testFile9.pdf', hash: 'fa88b972a4711608b50567fddc1f2d9a' },
                { fileName: 'testFile10.pdf', hash: '015efce0df3d504dbbc1524fa72b6ed6' }
            ]
        },
        {
            network: 'harmony',
            files: [
                { fileName: 'testFile6.pdf', hash: 'f22cbdcfdeee3086938a0d092e43d17f' },
                { fileName: 'testFile7.pdf', hash: 'c6faf881ffefe26fa52be5d9fedc6cc4' },
                { fileName: 'testFile8.pdf', hash: '22eed467f28c7098114e8bc6706aedfa' },
                { fileName: 'testFile9.pdf', hash: 'fa88b972a4711608b50567fddc1f2d9a' },
                { fileName: 'testFile10.pdf', hash: '015efce0df3d504dbbc1524fa72b6ed6' }
            ]
        },
        {
            network: 'polkadot',
            files: [
                { fileName: 'testFile11.pdf', hash: '75dac279cca806f04c3f1f4b634b3e7b' },
                { fileName: 'testFile12.pdf', hash: '5d9c71a1addca31f72054aaa3be630fd' },
                { fileName: 'testFile13.pdf', hash: 'c492f4ecdfb18a9df0263511ae72e2d7' },
                { fileName: 'testFile14.pdf', hash: '1023472195cdf1dd6c73fc287d3d13d2' },
                { fileName: 'testFile15.pdf', hash: '8c83f4ab799f819efc64a961a7592443' }
            ]
        }
    ],
    logs: [
        { range: '1 hour' },
        { range: '6 hours' },
        { range: '12 hours' },
        { range: '1 day' },
        { range: '3 days' },
        { range: '1 week' },
        { range: '1 month' },
        { range: '3 months' },
        { range: '6 months' },
        { range: '1 year' },
        { range: 'View all' }
    ],
    api: {
        keys: [
            '358974ed670017bbce5c5549292ec505',
            '6804c80f26be91667d03eaa1bf241890',
            '470cfd1ae228d40f98d08327c3368c72'
        ]
    },
    subscription: {
        status: 'paid',
        plan: 'Basic',
        monthToDatePings: 10,
        maxPings: 100,
        startDate: new Date()
    },
    settings: {
        members: [
            { username: 'user1', firstName: 'user1first', lastName: 'user1last', id: 'b901e0fab3f5768358d730fa0b350524' },
            { username: 'user2', firstName: 'user2first', lastName: 'user2last', id: 'e786406b3910bf2ecbb7cd81ff38b076' },
            { username: 'user3', firstName: 'user3first', lastName: 'user3last', id: 'bc0b6501fce6cd94bf3cbea8b7255dcf' },
            { username: 'user4', firstName: 'user4first', lastName: 'user4last', id: '53f71e70e348d848ecdf50eb2c311101' },
            { username: 'user5', firstName: 'user5first', lastName: 'user5last', id: '53a8af1b1a463b673bf50e9b7fafb1aa' },
            { username: 'user6', firstName: 'user6first', lastName: 'user6last', id: 'f8278c50943b4da73dfaebb3f0bd4180' },
            { username: 'user7', firstName: 'user7first', lastName: 'user7last', id: 'c808050584ca79ca1899c3af5e34f3e6' },
            { username: 'user8', firstName: 'user8first', lastName: 'user8last', id: '6290f0e7c27cd21fc96bfe80231fc272' },
            { username: 'user9', firstName: 'user9first', lastName: 'user9last', id: 'ac96da39eee214b5452313945470707c' },
            { username: 'user10', firstName: 'user10first', lastName: 'user10last', id: 'a290d4ac1f6f50aa7b8d4238b2a89b81' }
        ]
    },
    files: []
};

function constructTabs(initialPayload) {

}

function Breadcrumbs() {
    const history = useHistory();
    const { pathname } = useLocation();
    const { projectId } = useParams();
    const renderBreadcrumbs = useCallback(
        () => {
            const pathElements = pathname.split('/').splice(3);
            let reconstructedURL = `/dashboard/projects/${projectId}`;
            let model = [];
            for (let i = 1; i < pathElements.length; i++) {
                const element = pathElements[i];
                reconstructedURL = `${reconstructedURL}/${element}`
                const currentReconstructedURL = reconstructedURL;
                const item = {
                    label: element.charAt(0).toUpperCase() + element.slice(1),
                    command: () => history.push(currentReconstructedURL)
                }
                model.push(item);
            }
            const home = { icon: 'pi pi-home', command: () => history.push(`/dashboard/projects/${projectId}`) };
            return { home, model };
        },
        [history, pathname, projectId]
    );

    if (renderBreadcrumbs().model.length === 0) {
        return <React.Fragment />;
    }

    return <BreadCrumb {...renderBreadcrumbs()} />;
}

function Pipeline({ inProgress = 0, completed = 0, failed = 0 }) {
    const formatValue = (value) => value.length === 1 ? ` ${value}` : `${value}`;
    return (
        <PipelineContainer>
            <Badge value={formatValue(inProgress)} severity='success'/>
            &nbsp;
            <small>in progress</small>
            &nbsp;
            <Badge value={formatValue(completed)} />
            &nbsp;
            <small>completed</small>
            &nbsp;
            <Badge value={formatValue(failed)} severity='warning'/>
            &nbsp;
            <small>failed</small>           
        </PipelineContainer>
    );
}

function Members({ members = [] }) {
    const retrieveFirst4 = () => {
        const first4 = [];
        for (let i = 0; i < members.length && i < 3; i++) {
            const member = members[i];
            first4.push(member);
        }
        return first4;
    };
    const retrieveRemaining = () => {
        if (members.length > 4) {
            return members.length - 4;
        }
        return 0;
    };
    return (
        <MembersContainer>
            <AvatarGroup className='p-col-12'>
                {
                    retrieveFirst4().map(f4 => <Avatar label={f4} className="p-mr-2" size="small" shape="circle" />)
                }
                {
                    retrieveRemaining() === 0 ? <React.Fragment /> :
                    <Avatar label={`+${retrieveRemaining()}`} className="p-mr-2" size="small" shape="circle" />
                }
            </AvatarGroup>
        </MembersContainer>
    );
}
