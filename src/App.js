import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './routes/Homepage';

function App() {
  return (
    <React.Fragment>
      <Navbar />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className='container'
        >
          <Route exact path='/' children={<Homepage />}/>
          <Route exact path='/2' children={<div>test</div>}/>
        </AnimatedSwitch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
