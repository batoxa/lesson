import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.login}>
                {props.isAuth ? (
                    <NavLink className={styles.isauth} to={"/login"}>
                        <i className="fa fa-user" aria-hidden="true" />
                        &nbsp;{props.login}
                    </NavLink>
                ) : (
                    <NavLink className={styles.link} to={"/login"}>
                        <i className="fa fa-user" aria-hidden="true" />
                        &nbsp;Sign In{" "}
                    </NavLink>
                )}  
            </div>
            <NavLink to={"/"}>
                <img src="../../../logo512.png" height="30px" alt="logo"></img> </NavLink>
            <div className={styles.title}>
                My social network for learn react js
            </div>
        </header >
    );
};

export default Header;
