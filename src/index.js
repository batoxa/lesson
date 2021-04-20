import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/state';

let renderTree =(state)=>{
   ReactDOM.render(
   <BrowserRouter>
      <App
         state={state}
         addPost={store.addPost.bind(store)}
         updateNewPostText={store.updateNewPostText.bind(store)}
         addMessage = {store.addMessage.bind(store)}
         updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
   </BrowserRouter>,
   document.getElementById('root')
);
};

renderTree(store.getState());

store.subscribe(renderTree);
