import React, { createContext, useContext, useReducer } from 'react';
export const StateContext = createContext();

export const initialState = {
  cryptoList: [],
  firstSelected: undefined,
  secondSelected: undefined
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'fetchCryptoList':
      return {
        ...state,
        cryptoList: action.payload.cryptoList
      };
    case 'updateFirstCryptoSelected':
      return {
        ...state,
        firstSelected: action.payload.firstSelected
      };
    case 'updateSecondCryptoSelected':
      return {
        ...state,
        secondSelected: action.payload.secondSelected
      };
    default:
      return state;
  }
};

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);