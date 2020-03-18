import React from 'react';
import Main from './Components/Main/Main.js';
import { StateProvider, initialState, reducer } from './StateContextProvider';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  );
}

export default App;
