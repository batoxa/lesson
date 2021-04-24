import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
   return (
      <BrowserRouter >
         <div className="app-wrapper" >
            <Header />
            <Navbar />
            {/* <Navbar state={props.state.sideBar} /> */}
            <div className="app-wrapper-content" >
               <Route exact path='/' render={() => <Profile />} />
               <Route path='/profile' render={() => <Profile />} />
               <Route path='/dialogs' render={() => <DialogsContainer />} />
               <Route path='/news' render={() => <News />} />
               <Route path='/music' render={() => <Music />} />
               <Route path='/settings' render={() => <Settings />} />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;