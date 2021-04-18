import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navbar state={props.state.dialogsPage.dialogsData} />
            <div className="app-wrapper-content">
               <Route path='/profile'
                  render={() => <Profile
                     state={props.state.profilePage} />} />
               <Route path='/dialogs'
                  render={() => <Dialogs
                     state={props.state.dialogsPage} />} />
               <Route path='/news'
                  render={() => <News />} />
               <Route path='/music'
                  render={() => <Music />} />
               <Route path='/settings'
                  render={() => <Settings />} />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
