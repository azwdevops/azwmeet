// import installed packages
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";

// import styles
import "./Sidebar.scss";
// import material ui items

// import shared/global items

// import components/pages

// import redux API
import { logout } from "../../../redux/actions/auth";
import SystemAdminLinks from "./Links/SystemAdminLinks";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { loggedIn, logoutUser, profile_type } = props;
  const [openSubMenu, setOpenSubMenu] = useState("");

  // function to toggle sidebar submenu
  const toggleSubmenu = (link_name) => {
    if (openSubMenu === link_name) {
      setOpenSubMenu("");
    } else {
      setOpenSubMenu(link_name);
      console.log(openSubMenu);
    }
  };

  return (
    <div className="left-navbar" id="nav-bar">
      <nav className="nav">
        <Link to="" className="nav__logo">
          <i className="bx bx-layer nav__logo-icon"></i>
          <span className="nav__logo-name">AZW</span>
        </Link>
        <div className="nav__list">
          {/* unprotected links */}
          <>
            <Link
              to="/"
              className={
                `${pathname}` === "/" ? "nav__link active" : "nav__link"
              }
            >
              <i class="bx bx-home"></i>
              <span className="nav__name">Home</span>
            </Link>
          </>
          {/* protected links */}
          {loggedIn && (
            <>
              {profile_type === "system admin" && (
                <SystemAdminLinks
                  Link={Link}
                  pathname={pathname}
                  toggleSubmenu={toggleSubmenu}
                  openSubMenu={openSubMenu}
                />
              )}

              <Link
                to="/profile/"
                className={
                  `${pathname}` === "/profile/"
                    ? "nav__link active"
                    : "nav__link"
                }
              >
                <i class="bx bx-user nav__icon"></i>
                <span className="nav__name">Profile</span>
              </Link>
              <Link
                to=""
                className="nav__link"
                onClick={() => logoutUser(navigate)}
              >
                <i className="bx bx-log-out-circle"></i>
                <span className="nav__name">Logout</span>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth?.loggedIn,
    profile_type: state?.auth?.user?.profile_type,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (navigate) => dispatch(logout(navigate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
