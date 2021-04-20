import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state';

let renderTree =(state)=>{
   ReactDOM.render(
   <BrowserRouter>
      <App
         state={state}
         addPost={addPost}
         updateNewPostText={updateNewPostText}
         addMessage = {addMessage}
         updateNewMessageText={updateNewMessageText}
      />
   </BrowserRouter>,
   document.getElementById('root')
);
};

renderTree(state);

subscribe(renderTree);
