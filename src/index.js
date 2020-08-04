import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DataLayer} from './states/DataLayer'
import reducer, { initialState } from './states/reducer';


ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState}  reducer={reducer}>
      <App />
    </DataLayer>
    
  </React.StrictMode>,
  document.getElementById('root')
);
 