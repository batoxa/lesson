import { connect } from "react-redux";
import { Login } from "./Login";
import { loginUser, logoutUser } from "../../redux/auth-reducer";

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    };
};

const LoginContainer = connect(mapStateToProps, {
    loginUser,
    logoutUser,
})(Login);

export { LoginContainer };
