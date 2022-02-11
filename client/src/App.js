// import installed packages
import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import styles
import "./App.scss";
import { get_user } from "./redux/actions/auth";
import Header from "./components/common/Header/Header";
import Sidebar from "./components/common/Sidebar/Sidebar";
import { hideNavBar } from "./shared/scripts";
const Meetings = lazy(() => import("./pages/SystemAdmin/Meetings/Meetings"));
const LiveMeeting = lazy(() =>
  import("./pages/ActivateAccount/common/LiveMeeting/LiveMeeting")
);

const PrivateRoute = lazy(() => import("./shared/PrivateRoute"));

// import components/pages

// import Footer from "./components/common/Footer";
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const ActivateAccount = lazy(() =>
  import("./pages/ActivateAccount/ActivateAccount")
);
const ResetPasswordConfirm = lazy(() => import("./pages/ResetPasswordConfirm"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Home = lazy(() => import("./pages/Home/Home"));

// import redux API

function App() {
  const dispatch = useDispatch();
  const session_cookie = localStorage.getItem("session_cookie");

  const profile_type = useSelector((state) => state?.auth?.user?.profile_type);

  useEffect(() => {
    // get user on page refresh
    if (session_cookie) {
      dispatch(get_user());
    }
  }, [dispatch, session_cookie]);

  return (
    <div id="body-pd">
      <Router>
        <Header />
        <Sidebar />
        <Suspense
          fallback={<div style={{ textAlign: "center" }}>Loading...</div>}
        >
          <div onClick={hideNavBar} className="main-content">
            <Routes>
              {/* unauthenticated routes */}
              <Route exact path="/" element={<Home />} />

              <Route
                exact
                path="/user/password-reset/:password_token/"
                element={<ResetPasswordConfirm />}
              />
              <Route
                exact
                path="/user/activate/:activation_token/"
                element={<ActivateAccount />}
              />
              {/* authenticated routes */}
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/dashboard/" element={<Dashboard />} />
                <Route
                  exact
                  path="/live-meeting/:meetingNumber/"
                  element={<LiveMeeting />}
                />
                {profile_type === "system admin" && (
                  <Route
                    exact
                    path="/system-admin/meetings/"
                    element={<Meetings />}
                  />
                )}
              </Route>
              {/* not found route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
