import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Layout from './components/Layout';
import Folders from './routes/Folders';

function Dashboard() {
    const { path } = useRouteMatch();
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path} children={<div>Dashboard</div>} />
                <Route exact path={`${path}/projects`} children={<div>projects</div>}/>
                <Route path={`${path}/projects/:projectId`} component={(props) =>
                    <Layout>
                        <Route exact path={`${props.match.path}/folders`} children={<Folders />} />
                        <Route exact path={`${props.match.path}/folders/:folderId`} children={<div>folder</div>} />
                        <Route exact path={`${props.match.path}/folders/:folderId/:fileId`} children={<div>file</div>} />
                        <Route exact path={`${props.match.path}/files`} children={<div>all files</div>} />
                        <Route exact path={`${props.match.path}/files/:fileId`} children={<div>file</div>} />
                        <Route exact path={`${props.match.path}/networks`} children={<div>all networks</div>} />
                        <Route exact path={`${props.match.path}/networks/:network`} children={<div>all networks</div>} />
                        <Route exact path={`${props.match.path}/networks/:network/:fileId`} children={<div>file</div>} />
                        <Route exact path={`${props.match.path}/history`} children={<div>query history</div>} />
                        <Route exact path={`${props.match.path}/api`} children={<div>api</div>} />
                        <Route exact path={`${props.match.path}/subscription`} children={<div>subscription</div>} />
                        <Route exact path={`${props.match.path}/settings`} children={<div>settings</div>} />
                    </Layout>
                } />
            </Switch>
        </React.Fragment>
    );
}

export default Dashboard;
