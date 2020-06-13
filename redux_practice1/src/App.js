import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';

import store from "./store";



function App() {
  return (
    // store holds the whole state tree of app
    // Only dispatching an action change the inside of the state
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
