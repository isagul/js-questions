import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {questions} from './constants/questions';
import {Store} from './store';
import {SET_QUESTIONS} from './constants/actions';
import './App.scss';

function App() {
  const {dispatch} = useContext(Store);
  useEffect(() => {
    /*console.log(questions)
    console.log(state)*/
    dispatch({
      type: SET_QUESTIONS,
      payload: questions
    })
  }, []);
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
