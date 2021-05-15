import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
    const logoutUser = () => {
        props.logoutUser();
    };

    return (
        <header className={styles.header}>
            <div className={styles.login}>
                {props.isAuth ? (
                    <div>
                        <NavLink className={styles.isauth} to={"/login"}>
                            <i className='fa fa-user' aria-hidden='true' />
                            &nbsp;{props.login}
                        </NavLink>
                        <button className={styles.button} onClick={logoutUser}>
                            <i className='fa fa-sign-out' aria-hidden='true' />
                        </button>
                    </div>
                ) : (
                    <NavLink className={styles.link} to={"/login"}>
                        <i className='fa fa-user' aria-hidden='true' />
                        &nbsp;Sign In
                    </NavLink>
                )}
            </div>
            <NavLink to={"/"}>
                <img src='../../../logo512.png' height='30px' alt='logo'></img>{" "}
            </NavLink>
            <div className={styles.title}>My social network for learn react js</div>
        </header>
    );
};

export default Header;
