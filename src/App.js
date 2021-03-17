import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Notifications from './components/Notifications' 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './routes/Homepage';
import Signup from './routes/Signup';
import Signin from './routes/Signin';
import Pricing from './routes/Pricing';
import Registered from './routes/Registered';
import Validated from './routes/Validated';
import Layout from './components/Layout';
import Folders from './routes/Folders';
import usePoetryProjectId from './hooks/usePoetryProjectId';

function PoetryId() {
  usePoetryProjectId();
  return (
    <React.Fragment />
  );
}

function App() {
  const isPublicRoute = !useLocation().pathname.includes('/dashboard');
  return (
    <React.Fragment>
      <Notifications>
        { isPublicRoute? <Navbar /> : <React.Fragment /> }
        <Switch>
          <Route exact path='/' children={<Homepage />}/>
          <Route exact path='/sign-up' children={<Signup />}/>
          <Route exact path='/sign-in' children={<Signin />} />
          <Route exact path='/pricing' children={<Pricing />} />
          <Route exact path='/registered' children={<Registered />} />
          <Route exact path='/validated/:validationCode' children={<Validated />} />
        </Switch>
        {isPublicRoute ? <Footer /> : <React.Fragment /> }
        {
          !isPublicRoute ?
          <Switch>
            <Route exact path='/dashboard' children={<div>dashboard</div>}/>
            <Route exact path ='/dashboard/projects' children={<div>all projects</div>} />
            <Layout>
              <Route path='/dashboard/projects/:projectId' children={<PoetryId />} />
              <Route exact path='/dashboard/projects/:projectId' children={<div>main</div>} />
              <Route exact path='/dashboard/projects/:projectId/folders' render={props => <Folders {...props} />} />
              <Route exact path='/dashboard/projects/:projectId/folders/:folderId' children={<div></div>} />
            </Layout>
          </Switch> :
          <React.Fragment />
        }
      </Notifications>
    </React.Fragment>
  );
}

export default App;
