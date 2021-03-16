import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Layout from './components/Layout';

function Dashboard() {
    const { path } = useRouteMatch();
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path} children={<div>Dashboard</div>} />
                <Route exact path={`${path}/projects`} children={<div>projects</div>}/>
                <Route path={`${path}/projects/:projectId`} component={(props) =>
                    <Layout {...props}>
                        <Route exact path={`${path}/projects/:projectId/folders`} children={<div>all folders</div>} />
                        <Route exact path={`${path}/projects/:projectId/folders/:folderId`} children={<div>folder</div>} />
                        <Route exact path={`${path}/projects/:projectId/folders/:folderId/:fileId`} children={<div>file</div>} />
                        <Route exact path={`${path}/projects/:projectId/files`} children={<div>all files</div>} />
                        <Route exact path={`${path}/projects/:projectId/files/:fileId`} children={<div>file</div>} />
                        <Route exact path={`${path}/projects/:projectId/networks`} children={<div>all networks</div>} />
                        <Route exact path={`${path}/projects/:projectId/networks/:network`} children={<div>all networks</div>} />
                        <Route exact path={`${path}/projects/:projectId/networks/:network/:fileId`} children={<div>file</div>} />
                        <Route exact path={`${path}/projects/:projectId/history`} children={<div>query history</div>} />
                        <Route exact path={`${path}/projects/:projectId/api`} children={<div>api</div>} />
                        <Route exact path={`${path}/projects/:projectId/subscription`} children={<div>subscription</div>} />
                        <Route exact path={`${path}/projects/:projectId/settings`} children={<div>settings</div>} />
                    </Layout>
                } />
            </Switch>
        </React.Fragment>
    );
}

export default Dashboard;
