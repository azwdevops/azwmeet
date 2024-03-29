import React from "react";

import Jitsi from "react-jitsi";

const TestMeeting = () => {
  const roomName =
    "my-super-secret-meeting-123e4567-e89b-12d3-a456-426655440000";
  const userFullName = "Joseph Strawberry";
  return (
    <div>
      <h2>My First Meeting!</h2>
      <Jitsi roomName={roomName} displayName={userFullName} />
    </div>
  );
};

export default TestMeeting;
