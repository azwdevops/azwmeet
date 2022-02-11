// import installed packages
import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import styles

import "./Header.scss";
// import material ui items
import Avatar from "@mui/material/Avatar";
// import shared/global items
import { showNavbar } from "../../../shared/scripts";
// import components/pages

// import redux API
import { OPEN_LOGIN, OPEN_SIGNUP } from "../../../redux/actions/types";
import { logout } from "../../../redux/actions/auth";

const Login = lazy(() => import("../../users/Login"));
const Signup = lazy(() => import("../../users/Signup"));
const ForgotPassword = lazy(() => import("../../users/ForgotPassword"));
const ReactivateAccount = lazy(() => import("../../users/ReactivateAccount"));

const Header = (props) => {
  const navigate = useNavigate();

  const {
    username,
    userImage,
    loginForm,
    signupForm,
    resendActivationForm,
    forgotPasswordForm,
  } = props;
  const { logoutUser, openLogin, openSignup } = props;
  const session_cookie = localStorage.getItem("session_cookie");

  return (
    <>
      <header className="header" id="header">
        <div className="header__toggle">
          <i className="bx bx-menu" id="header-toggle" onClick={showNavbar}></i>
          <h1>azw</h1>
        </div>

        {session_cookie ? (
          <div className="header__right authenticated">
            <>
              <div>
                <Avatar alt={username} src={userImage} className="user__image">
                  {username?.charAt(0)}
                </Avatar>
                <h6>{username}</h6>
                <i className="bx bx-caret-down"></i>
              </div>
              <ul className="dropdown">
                <li>
                  <Link to="/dashboard/">Dashboard</Link>
                </li>
                <li onClick={() => logoutUser(navigate)}>Logout</li>
              </ul>
            </>
          </div>
        ) : (
          <div className="header__right">
            <span className="button" onClick={openLogin}>
              Login
            </span>
            <span className="button" onClick={openSignup}>
              Signup
            </span>
          </div>
        )}
      </header>
      {/* components */}
      <Suspense
        fallback={<div style={{ textAlign: "center" }}>Loading...</div>}
      >
        {loginForm && <Login />}
        {signupForm && <Signup />}
        {forgotPasswordForm && <ForgotPassword />}
        {resendActivationForm && <ReactivateAccount />}
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.user?.username,
    userImage: state.auth?.user?.userImage,
    loginForm: state.auth?.loginForm,
    signupForm: state.auth?.signupForm,
    forgotPasswordForm: state.auth?.forgotPasswordForm,
    resendActivationForm: state.auth?.resendActivationForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (navigate) => logout(navigate),
    openLogin: () => dispatch({ type: OPEN_LOGIN }),
    openSignup: () => dispatch({ type: OPEN_SIGNUP }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
