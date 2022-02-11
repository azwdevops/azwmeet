import React, { useEffect, useState, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { get_meetings } from "../../../redux/actions/meeting";
import { START_LOADING } from "../../../redux/actions/types";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
const AddMeeting = lazy(() => import("./components/AddMeeting"));

const Meetings = (props) => {
  const { meetings, loading, userId } = props;
  const { startLoading, getMeetings } = props;

  const [openAddMeeting, setOpenAddMeeting] = useState(false);

  useEffect(() => {
    if (userId && meetings?.length === 0) {
      startLoading();
      getMeetings(userId);
    }
  }, [startLoading, userId, getMeetings, meetings?.length]);
  return (
    <>
      <div className="table__parent">
        <div className="table__parentHeader">
          <button
            type="button"
            className="add__button"
            onClick={() => setOpenAddMeeting(true)}
          >
            Add Meeting
          </button>
        </div>
        <br />
        {loading && (
          <CircularProgress
            style={{ position: "absolute", marginLeft: "45%" }}
          />
        )}
        {meetings?.length > 0 ? (
          <table className="table__listing">
            <tr className="table__listingHeader">
              <th>Meeting Number</th>
              <th>Start Time</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
            {meetings?.map((meeting) => (
              <tr className="table__listingItem" key={meeting?.number}>
                <td>{meeting?.meeting_number}</td>
                <td>{moment(meeting?.start_time).format("LLL")}</td>
                <td>{meeting?.duration}</td>
                <td>
                  {meeting?.status === "start now" ? (
                    <Link
                      to={`/live-meeting/${meeting?.meeting_number}/`}
                      className="dodgerblue bd button__sp"
                    >
                      Start Now
                    </Link>
                  ) : (
                    <span>Not started</span>
                  )}
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <h4 className="not__available">No meetings added yet</h4>
        )}
      </div>
      {/* child components */}
      <Suspense fallback={<div>Loading...</div>}>
        {openAddMeeting && (
          <AddMeeting
            openAddMeeting={openAddMeeting}
            setOpenAddMeeting={setOpenAddMeeting}
          />
        )}
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state?.auth?.user?.id,
    loading: state?.shared?.loading,
    meetings: state?.meeting?.meetings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: () => dispatch({ type: START_LOADING }),
    getMeetings: (userId) => dispatch(get_meetings(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meetings);
