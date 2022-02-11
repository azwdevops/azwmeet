import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import API from "../../../../shared/axios";
import { showError } from "../../../../redux/actions/shared";
import { START_LOADING, STOP_LOADING } from "../../../../redux/actions/types";
import CircularProgress from "@mui/material/CircularProgress";

import "./LiveMeeting.scss";

const LiveMeeting = (props) => {
  const { meetingNumber } = useParams();
  const { userId, loading } = props;
  const { startLoading, stopLoading } = props;
  const [meetingDetails, setMeetingDetails] = useState({});

  useEffect(() => {
    if (userId) {
      startLoading();
      const fetchMeetingDetails = async () => {
        await API.get(
          `/api/meetings/maintain-live-meeting/${userId}/${meetingNumber}/`
        ).then((res) => {
          setMeetingDetails(res?.data?.meeting_details);
        });
      };
      fetchMeetingDetails()
        .catch((err) => showError(err))
        .finally(() => stopLoading());
    }
  }, [startLoading, stopLoading, userId, meetingNumber]);

  return (
    <div className="live__meeting">
      {meetingDetails?.meeting_number && meetingDetails?.token_value ? (
        <iframe
          title={`${meetingDetails?.meeting_number}`}
          src={`https://meeting.azwgroup.com/${meetingDetails?.meeting_number}?jwt=${meetingDetails?.token_value}`}
          allow="camera;microphone"
        />
      ) : (
        <CircularProgress style={{ position: "absolute", marginLeft: "45%" }} />
      )}
    </div>
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
    stopLoading: () => dispatch({ type: STOP_LOADING }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveMeeting);
