import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './routes/Homepage';
import Signup from './routes/Signup';
import Signin from './routes/Signin';
import Pricing from './routes/Pricing';

function App() {
  return (
    <React.Fragment>
      <Navbar />
        <Switch>
          <Route exact path='/' children={<Homepage Footer={Footer} />}/>
          <Route exact path='/sign-up' children={<Signup Footer={Footer} />}/>
          <Route exact path='/sign-in' children={<Signin Footer={Footer} />} />
          <Route exact path='/pricing' children={<Pricing Footer={Footer} />} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
