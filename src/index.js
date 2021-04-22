import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';

let renderTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <App
            state={state}
            dispatch={store.dispatch.bind(store)}
         />
      </BrowserRouter>,
      document.getElementById('root')
   );
};

renderTree(store.getState());

store.subscribe(() => {
   let state = store.getState();
   renderTree(state)
});
