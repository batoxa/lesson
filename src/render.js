import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state';

export let renderTree =(state)=>{
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

