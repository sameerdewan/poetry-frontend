import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Notifications from './components/Notifications' 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './routes/Homepage';
import Signup from './routes/Signup';
import Signin from './routes/Signin';
import Pricing from './routes/Pricing';
import Registered from './routes/Registered';

function App() {
  return (
    <React.Fragment>
      <Notifications>
        <Navbar />
          <Switch>
            <Route exact path='/' children={<Homepage />}/>
            <Route exact path='/sign-up' children={<Signup />}/>
            <Route exact path='/sign-in' children={<Signin />} />
            <Route exact path='/pricing' children={<Pricing />} />
            <Route exact path='/registered' children={<Registered />} />
          </Switch>
          <Footer />
      </Notifications>
    </React.Fragment>
  );
}

export default App;
