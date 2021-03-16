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
import Dashboard from './routes/dashboard/Dashboard';

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
          <Route path='/dashboard' component={(props) => <Dashboard {...props} />} />
        </Switch>
        {isPublicRoute ? <Footer /> : <React.Fragment /> }
      </Notifications>
    </React.Fragment>
  );
}

export default App;
