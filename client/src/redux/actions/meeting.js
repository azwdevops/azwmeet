import * as actionTypes from "./types";
import * as api from "../../api";

import { showError, stopLoading } from "./shared";

// action to create a new meeting
export const create_meeting = (userId, body, resetForm) => async (dispatch) => {
  await api
    .createMeeting(userId, body)
    .then((res) => {
      dispatch({
        type: actionTypes.NEW_MEETING,
        payload: res?.data?.new_meeting_data,
      });
      resetForm();
      window.alert(res?.data?.detail);
    })
    .catch((err) => showError(err))
    .finally(() => stopLoading(dispatch));
};

// action for system admin to get all meetings
export const get_meetings = (userId) => async (dispatch) => {
  await api
    .getMeetings(userId)
    .then((res) => {
      dispatch({
        type: actionTypes.SET_MEETINGS,
        payload: res?.data?.meetings_data,
      });
    })
    .catch((err) => showError(err))
    .finally(() => stopLoading(dispatch));
};
