import React from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';


const App = (props) => {
   return (
      <BrowserRouter >
         <div className="app-wrapper" >
            <Header />
            <Navbar />
            {/* <Navbar state={props.state.sideBar} /> */}
            <div className="app-wrapper-content" >
               <Route exact path='/' render={() => <ProfileContainer />} />
               <Route path='/profile' render={() => <ProfileContainer />} />
               <Route path='/dialogs' render={() => <DialogsContainer />} />
               <Route path='/news' render={() => <News />} />
               <Route path='/music' render={() => <Music />} />
               <Route path='/users' render={() => <UsersContainer />} />
               <Route path='/settings' render={() => <Settings />} />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;