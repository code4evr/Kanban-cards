import React from 'react';
import './App.css';
import Header from './Components/Header';
import CreateCards from './Components/CreateCard';
import CardStatus from './Components/status/CardStatus';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* all major components goes here */}
        <Header />
        <br />
        <CreateCards />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <CardStatus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
