import React, {createContext, useReducer} from 'react';
import {SET_QUESTIONS, SET_USER_ANSWER} from './constants/actions'
export const Store = createContext();

const initialState = {
    currentQuestions: [],
    restQuestions: [],
    userAnswers: []
};

function reducer(state, action) {
  // let updatedState;
  //let index;

  switch (action.type) {
    case SET_QUESTIONS:
      let randomQuestions = [];
      
      while (randomQuestions.length < 10) {
        let item = action.payload[Math.floor(Math.random() * action.payload.length)];
        let idx = randomQuestions.findIndex(question => question.id === item.id);
        if (idx === -1) {
          randomQuestions.push(item);
        }
      }
      return {...state, currentQuestions: [...randomQuestions]};
    case SET_USER_ANSWER:
      let updatedState = [...state.userAnswers];
      let idx = updatedState.findIndex(item => item.question.id === action.payload.question.id);
      if (idx === -1) {
        updatedState.push(action.payload)
      } else {
        updatedState[idx] = action.payload;
      }
      return {...state, userAnswers: updatedState };
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