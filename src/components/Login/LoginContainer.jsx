import { connect } from "react-redux";
import Login from "./Login";
import { loginUser } from "../../redux/auth-reducer";


const mapStateToProps = (state) => {
    return {
    };
};

const LoginContainer = connect(mapStateToProps, {
    loginUser
})(Login);

export default LoginContainer;
