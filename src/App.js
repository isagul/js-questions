import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from './store';
import { SET_QUESTIONS, SET_QUESTION_COUNT } from './constants/actions';
import { START_QUIZ } from './constants/routes';
import './App.scss';
import { Select } from 'antd';

const { Option } = Select;
const questions = require('./api/data.json');

function App() {
  const { state, dispatch } = useContext(Store);

  function handleChange(value) {
    dispatch({
      type: SET_QUESTION_COUNT,
      payload: value
    })
  }

  function startQuiz(){
    dispatch({
      type: SET_QUESTIONS,
      payload: questions
    })
  }

  return (
    <div className="index">
      <h2>JavaScript Quiz App</h2>
      <div className="select-count-area">
        <label>Select Question Count:</label>
        <Select defaultValue={state.questionCount} style={{ width: 120, marginBottom: '10px' }} onChange={handleChange}>
          <Option value="1">1</Option>
          <Option value="3">3</Option>
          <Option value="5">5</Option>
          <Option value="10">10</Option>
        </Select>
      </div>
      
      <Link to={START_QUIZ}>
        <button className="btn-start-test" onClick={startQuiz}>START A TEST</button>
      </Link>
    </div>
  );
}

export default App;
