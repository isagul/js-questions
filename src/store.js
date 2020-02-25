import React, {createContext, useReducer} from 'react';

export const Store = createContext();

const initialState = {
    currentQuestions: [],
    userAnswers: []
};

function reducer(state, action) {
  /*let updatedState;
  let index;*/

  switch (action.type) {
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