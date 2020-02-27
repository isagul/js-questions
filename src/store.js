import React, {createContext, useReducer} from 'react';
import {SET_QUESTIONS, SET_USER_ANSWER, SET_QUESTION_COUNT} from './constants/actions'
export const Store = createContext();

const initialState = {
    currentQuestions: [],
    restQuestions: [],
    userAnswers: [],
    questionCount: 10
};

function reducer(state, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      let randomQuestions = [];

      if (action.payload.length > 0) {
        while (randomQuestions.length < state.questionCount) {
          let item = action.payload[Math.floor(Math.random() * action.payload.length)];
          if (item.questionDetail.split('.')[0].trim() !== 57) {
            let idx = randomQuestions.findIndex(question => question.code === item.code);
            if (idx === -1) {
              randomQuestions.push(item);
            }
          }        
        }
      }
      let diff = action.payload.filter(o1 => randomQuestions.filter(o2 => o2.code === o1.code).length === 0);

      return {...state, currentQuestions: [...randomQuestions], restQuestions: [...diff]};
    case SET_USER_ANSWER:
      let updatedState = [...state.userAnswers];
      let idx = updatedState.findIndex(item => item.question === action.payload.question);
      if (idx === -1) {
        updatedState.push(action.payload)
      } else {
        updatedState[idx] = action.payload;
      }
      return {...state, userAnswers: updatedState };
    case SET_QUESTION_COUNT:
      return {...state, questionCount: action.payload}
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch
  }

  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  )
}