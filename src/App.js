import React from 'react';
import Egresos from './components/Egresos';
import Navigation from './components/Navigation';


function App() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="container mt-4">
      <Egresos />
      </div>
      
    </React.Fragment>
  );
}

export default App;
