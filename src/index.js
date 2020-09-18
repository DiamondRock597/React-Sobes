import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import reducer from './reducers/index'


const initialState = { isLoading: false, modal: { isOpen: false, itemModal: {} } }
const store = createStore(reducer, initialState, applyMiddleware(Thunk))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

