/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
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
import logoImage from '../images/poetry-white.svg';
import { getFolders } from '../services/poetry-system';
import CreateFolder from '../components/CreateFolder';

const createFoldersTreeData = (folders = []) => {
    const root = [];
    root.push({ key: 'root', label: 'View all', icon: 'pi pi-fw pi-eye' });
    for (let i = 0; i < folders.length; i++) {
        const folderData = folders[i];
        const folder = {};
        folder.key = `${i}`;
        folder.label = folderData.name;
        folder.data = folderData.name;
        folder.icon = 'pi pi-fw pi-folder';
        folder.children = [];
        for (let j = 0; j < folderData.files.length; j++) {
            const fileData = folderData.files[j];
            const file = {};
            file.key = `${i}-${j}`;
            file.label = fileData.fileName;
            file.data = fileData.hash;
            folder.children.push(file);
        }
        root.push(folder);
    }
    return root;
};

export const LayoutContext = React.createContext({});

function Layout({ children}) {
    const [activeIndex, setActiveIndex] = useState();
    const [projectId, setProjectId] = useState('');
    const [expanded, setExpanded] = useState(false);
    const [folders, setFolders] = useState([]);

    const history = useHistory();

    const onTabChange = useCallback(
        ({ index }) => {
            setActiveIndex(index);
        },
        [projectId]
    );

    const onTreeNodeClick_Folders = useCallback(
        ({ value }) => {
            const isRoot = value === 'root';
            if (isRoot) {
                return history.push(`/dashboard/projects/${window.poetryProjectId}/folders`);
            }
            const isFile = value.includes('-');
            if (isFile) {
                const [folderIndex, fileIndex] = value.split('-');
                const folder = folders[Number(folderIndex)];
                const file = folder.files[Number(fileIndex)];
                return history.push(`/dashboard/projects/${window.poetryProjectId}/folders/${folder.name}/${file.fileName}`);
            }
            const folder = folders[Number(value )];
            return history.push(`/dashboard/projects/${window.poetryProjectId}/folders/${folder?.name}`);
        },
        [folders]
    );

    useEffect(() => {
        (async () => {
            try {
                const folders = await getFolders();
                setFolders(folders);
            } catch (error) {

            }
        })();
    }, []);

    const dummyTabs = [
        { header: 'Folders', data: createFoldersTreeData(folders), onTreeNodeClick: onTreeNodeClick_Folders },
        { header: 'Files', data },
        { header: 'Tags', data },
        { header: 'Logs', data },
        { header: 'Archive', data },
        { header: 'API', data },
        { header: 'Subscription', data },
        { header: 'Settings', data },
    ];

    useEffect(() => {
        setProjectId(window.poetryProjectId);
    }, [window.poetryProjectId]);

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
                        <AutoComplete size={25} placeholder='???? Search...'/>
                        <Avatar label='SE' shape='circle'/>
                    </TBRight>
                </Taskbar>
            </TopPanel>
            <Container>
                <SidePanel expanded={expanded}>
                    <Accordion activeIndex={activeIndex} onTabChange={onTabChange}>
                        {
                            dummyTabs.map(dT =>         
                                <AccordionTab header={dT.header}>
                                    <Tree
                                        value={dT.data} 
                                        selectionMode='single'
                                        onSelectionChange={dT.onTreeNodeClick}
                                    />
                                </AccordionTab>
                            )
                        }
                        
                    </Accordion>
                </SidePanel>
                <Main>
                    <Breadcrumbs />
                    <div style={{ margin: '10px', display: 'flex', justifyContent:'center' }}>
                        <LayoutContext.Provider value={{ folders }}>
                            {children}
                        </LayoutContext.Provider>
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
            <CreateFolder />
        </React.Fragment>
    );
}

export default Layout;


const SidePanel = styled.section`
    background: rgb(103,58,181, .1) !important;
    & .p-accordion-header-link {
        background: transparent !important;
    };
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
    .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon, .p-treenode {
        font-weight: 400;
    };
    .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
        background: rgb(103,58,188, .2) !important;
    };
    .p-treenode-children > * {
        color: grey !important;
        font-weight: 100;
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

function Breadcrumbs() {
    const history = useHistory();
    const { pathname } = useLocation();
    const [projectId, setProjectId] = useState('');
    
    useEffect(() => {
        setProjectId(window.poetryProjectId);
    }, [window.poetryProjectId]);

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
