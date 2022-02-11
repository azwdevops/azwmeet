import React, { useState } from "react";
import { connect } from "react-redux";
import MediumDialog from "../../../../components/common/MediumDialog";
import { create_meeting } from "../../../../redux/actions/meeting";
import { START_LOADING } from "../../../../redux/actions/types";
import { ifEmpty, resetFormValues } from "../../../../shared/sharedFunctions";
import CircularProgress from "@mui/material/CircularProgress";

const AddMeeting = (props) => {
  const { userId, openAddMeeting, loading } = props;
  const { createMeeting, startLoading, setOpenAddMeeting } = props;

  const [meetingDetails, setMeetingDetails] = useState({
    start_time: "",
    duration: "",
  });

  const { start_time, duration } = meetingDetails;

  const handleChange = (e) => {
    setMeetingDetails({ ...meetingDetails, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    resetFormValues(meetingDetails);
  };

  const handleClose = () => {
    resetForm();
    setOpenAddMeeting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ifEmpty(meetingDetails)) {
      return window.alert("Please fill in all details");
    }
    startLoading();
    createMeeting(userId, { ...meetingDetails }, resetForm);
  };
  return (
    <MediumDialog isOpen={openAddMeeting} maxWidth="900px">
      <form
        className="dialog"
        onSubmit={handleSubmit}
        id={loading ? "formSubmitting" : ""}
      >
        <h3>Enter meeting details</h3>
        <div className="dialog__row">
          <span>
            <label htmlFor="">Start Time</label>
            <input
              type="datetime-local"
              name="start_time"
              onChange={handleChange}
              value={start_time}
            />
          </span>
          <span>
            <label htmlFor="">Duration (Minutes)</label>
            <input
              type="number"
              name="duration"
              onChange={handleChange}
              value={duration}
              min="1"
            />
          </span>
        </div>
        {loading && (
          <CircularProgress
            style={{ position: "absolute", marginLeft: "45%" }}
          />
        )}
        <div className="form__Buttons">
          <button type="button" onClick={handleClose}>
            Close
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </MediumDialog>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state?.auth?.user?.id,
    loading: state?.shared?.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: () => dispatch({ type: START_LOADING }),
    createMeeting: (userId, body, resetForm) =>
      dispatch(create_meeting(userId, body, resetForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMeeting);
