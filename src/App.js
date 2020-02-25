import React from 'react';
import {Link} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="index">
      <h2>JavaScript Questions</h2> 
      <Link to="/start-quiz">
        <button className="btn-start-test">START A TEST</button>
      </Link>
    </div>
  );
}

export default App;
