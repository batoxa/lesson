import { connect } from "react-redux";
import Login from "./Login";
import { loginUser, logoutUser } from "../../redux/auth-reducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

const LoginContainer = connect(mapStateToProps, {
    loginUser,
    logoutUser,
})(Login);

export default LoginContainer;
