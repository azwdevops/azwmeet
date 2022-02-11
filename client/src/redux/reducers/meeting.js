import { updateObject } from "../utility";
import * as actionTypes from "../actions/types";

const initialState = {
  meetings: [],
};

const createMeeting = (state, payload) => {
  return updateObject(state, {
    meetings: [...state.meetings, payload],
  });
};
const setMeetings = (state, payload) => {
  return updateObject(state, {
    meetings: payload,
  });
};

const meetingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_MEETINGS:
      return setMeetings(state, payload);
    case actionTypes.NEW_MEETING:
      return createMeeting(state, payload);
    default:
      return state;
  }
};

export default meetingReducer;
