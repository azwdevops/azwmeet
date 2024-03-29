// import installed packages
import { useState } from "react";
import { connect } from "react-redux";
// import styles

// import material ui items
import CircularProgress from "@mui/material/CircularProgress";
// import shared/global items
import globals from "../../shared/globals";
import { ifEmpty, resetFormValues } from "../../shared/sharedFunctions";
// import components/pages
import MediumDialog from "../common/MediumDialog";
// import redux API
import { CLOSE_SIGNUP, START_LOADING } from "../../redux/actions/types";
import { signup_user } from "../../redux/actions/auth";

const Signup = (props) => {
  const { loading, signupForm } = props; // get state from props
  const { startLoading, closeSignup, signupUser } = props; // get dispatch actions from props

  // internal state
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  //############### destructuring code ###################//
  const { first_name, last_name, username, email, password, confirm_password } =
    newUser;
  const { fillFields } = globals;

  //#################end of destructuring ###########//

  const resetForm = () => {
    resetFormValues(newUser);
  };

  const closeSignupForm = () => {
    closeSignup();
    resetForm();
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (ifEmpty(newUser)) {
      return window.alert(fillFields);
    }
    // confirm passwords match
    if (password !== confirm_password) {
      return window.alert("Passwords should match");
    }

    // dispatch the loading action
    startLoading();

    // call the signup action creator
    signupUser(newUser, resetForm);
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  return (
    <MediumDialog isOpen={signupForm}>
      <form className="dialog" id={loading ? "formSubmitting" : ""}>
        <h3>Create new account</h3>
        <div className="dialog__row">
          <span>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name="first_name"
              value={first_name}
              onChange={handleChange}
              required
            />
          </span>
          <span>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={last_name}
              onChange={handleChange}
              required
            />
          </span>
        </div>
        {loading && (
          <CircularProgress
            style={{ position: "absolute", marginLeft: "43%" }}
          />
        )}
        <div className="dialog__row">
          <span>
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
          </span>
          <span>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              username={email}
              onChange={handleChange}
              required
            />
          </span>
        </div>

        <div className="dialog__row">
          <span>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </span>
          <span>
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              value={confirm_password}
              onChange={handleChange}
              required
            />
          </span>
        </div>
        <div className="form__Buttons">
          <button type="button" onClick={closeSignupForm}>
            Close
          </button>
          <button type="submit" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
        <div className="extra__formButtons"></div>
      </form>
    </MediumDialog>
  );
};

const mapStateToProps = (state) => {
  return {
    signupForm: state.auth.signupForm,
    loading: state.shared?.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: () => dispatch({ type: START_LOADING }),
    closeSignup: () => dispatch({ type: CLOSE_SIGNUP }),
    signupUser: (newUser, resetForm) =>
      dispatch(signup_user(newUser, resetForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
