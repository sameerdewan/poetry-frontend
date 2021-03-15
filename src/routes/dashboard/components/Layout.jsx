import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Tree } from 'primereact/tree';

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
    width: ${props => props.expanded ? '400px' : '250px'};
    transition: width .5s;
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

const BottomSidePanel = styled.footer`
    position: absolute;
    height: 50px;
    width: ${props => props.expanded ? '400px' : '250px'};
    transition: width .5s;
    background: var(--poetry_brand);
    box-shadow: rgba(0, 0, 0, 0.15) -7px 3px 3px 6px;
    display: flex;
    justify-content: flex-end;
`;

const TopPanel = styled.header`
    background: var(--poetry_brand);
    border-bottom: 1px solid var(--poetry_brand);
    height: 50px;
    width: 100vw;
    font-family: poetry;
    color: var(--poetry_brand);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

const BottomPanel = styled.footer`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    color: white;
    width: calc(100vw - ${props => props.expanded ? '398.4px' : '249px'});
    left: ${props => props.expanded ? '398.4px' : '249px'};
    transition: all .5s;
    position: absolute;
    bottom: 0;
    height: 50px;
`;

const Container = styled.div`
    display: inline-flex;
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
]

function Layout() {
    const [expanded, setExpanded] = useState(false);

    return (
        <React.Fragment>
            <TopPanel>

            </TopPanel>
            <Container>
                <SidePanel expanded={expanded}>
                    <Accordion activeIndex={0}>
                        <AccordionTab header='Files'>
                            <Tree value={data} />
                        </AccordionTab>
                        <AccordionTab header='History'>

                        </AccordionTab>
                        <AccordionTab header='API'>

                        </AccordionTab>
                        <AccordionTab header='Subscription'>

                        </AccordionTab>
                        <AccordionTab header='Settings'>

                        </AccordionTab>
                    </Accordion>
                </SidePanel>
            </Container>
            <BottomSidePanel expanded={expanded}>
                        <Button icon={`pi pi-angle-double-${expanded ? 'left' : 'right'}`} onClick={() => setExpanded(!expanded)} />
                    </BottomSidePanel>
            <BottomPanel expanded={expanded}>

            </BottomPanel>
        </React.Fragment>
    );
}

export default Layout;
