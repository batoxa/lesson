import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile } from '../../redux/profile-reducer';
import { profileAPI } from '../api/api';
import Profile from './Profile';

class ProfileContainer extends React.Component {

   componentDidMount() {
      profileAPI.userProfile(this.props.match.params.userId)
         .then(data => {
            this.props.setUserProfile(data)
         })
   }

   componentWillUnmount() {
      this.props.setUserProfile()
   }

   render() {
      return (
         <Profile {...this.props} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      user: state.profilePage.userData
   }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
