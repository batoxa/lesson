import React from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { initializeApp } from "./redux/app-reducer";
import { authenticationUser } from "./redux/auth-reducer";

import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }
    componentDidUpdate(prevProps) {
        if (this.props.isAuth !== prevProps.isAuth) {
            this.props.authenticationUser();
        }
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return < BrowserRouter >
            <div className="app-wrapper" >
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content" >
                    <Route exact={true} path='/' render={() => <ProfileContainer />} />
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                    <Route path='/login' render={() => <LoginContainer />} />
                </div>
            </div>
        </BrowserRouter >
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth,
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp, authenticationUser }),
)(App);


