import React, { useCallback, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
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

function Layout() {
    const [expanded, setExpanded] = useState(false);

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
                        <small>Project:</small> AaveAave
                    </TBMiddle>
                    <TBRight>
                        <AutoComplete size={25} placeholder='🔎 Search...'/>
                        <Avatar label='SE' shape='circle'/>
                    </TBRight>
                </Taskbar>
            </TopPanel>
            <Container>
                <SidePanel expanded={expanded}>
                    <Accordion activeIndex={0}>
                        {
                            dummyTabs.map(dT =>         
                                <AccordionTab header={dT.header}>
                                    <Tree value={dT.data} />
                                </AccordionTab>
                            )
                        }
                    </Accordion>
                </SidePanel>
                <Main>
                    <Breadcrumbs />
                    test content
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
    width: calc(100% - 300px);
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
        "key": "0",
        "label": "Documents",
        "data": "Documents Folder",
        "icon": "pi pi-fw pi-inbox",
        "children": [{
            "key": "0-0",
            "label": "Work",
            "data": "Work Folder",
            "icon": "pi pi-fw pi-cog",
            "children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]
        },
        {
            "key": "0-1",
            "label": "Home",
            "data": "Home Folder",
            "icon": "pi pi-fw pi-home",
            "children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]
        }]
    },
    {
        "key": "1",
        "label": "Events",
        "data": "Events Folder",
        "icon": "pi pi-fw pi-calendar",
        "children": [
            { "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },
            { "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },
            { "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]
    },
    {
        "key": "2",
        "label": "Movies",
        "data": "Movies Folder",
        "icon": "pi pi-fw pi-star",
        "children": [{
            "key": "2-0",
            "icon": "pi pi-fw pi-star",
            "label": "Al Pacino",
            "data": "Pacino Movies",
            "children": [{ "key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]
        },
        {
            "key": "2-1",
            "label": "Robert De Niro",
            "icon": "pi pi-fw pi-star",
            "data": "De Niro Movies",
            "children": [{ "key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]
        }]
    }
];

const dummyTabs = [
    { header: 'Folders', data },
    { header: 'Files', data },
    { header: 'Networks', data },
    { header: 'History', data },
    { header: 'API', data },
    { header: 'Subscription', data },
    { header: 'Settings', data },
];

function Breadcrumbs () {
    const history = useHistory();
    const { pathname } = useLocation();
    const renderBreadcrumbs = useCallback(
        () => {
            const pathElements = pathname.split('/').splice(1);
            let reconstructedURL = '/dashboard';
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
            const home = { icon: 'pi pi-home', command: () => history.push('/dashboard') };
            return { home, model };
        },
        [history, pathname]
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
