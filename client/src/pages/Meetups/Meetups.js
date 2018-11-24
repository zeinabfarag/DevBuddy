import React from "react";
import Groups from "../../components/groupevents";

const Meetups = (props) => {
  return (
    <div className="container">
      <div className="col-lg-3" />
      <Groups {...props} username={props.username} />
    </div>
  );
};

export default Meetups;
