import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './routes/Homepage';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Homepage />
    </React.Fragment>
  );
}

export default App;
