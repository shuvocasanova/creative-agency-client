import React from "react";

const Feedbacks = ({ feedback }) => {
  return (
    <div className="col-md-4 p-0">
      <div className="p-3 m-3 border rounded">
        <div className="row mb-2 d-flex align-items-center">
          <div className="col-3">
            <img
              className="rounded-circle"
              height="64"
              width="64"
              src={feedback.photoURL}
              alt={feedback.name}
            />
          </div>
          <div className="col-9">
            <h5 className="m-0 p-0">{feedback.name}</h5>
            <h6 className="m-0 p-0">{feedback.company}</h6>
          </div>
        </div>
        <p className="text-muted text-justify ">{feedback.description}</p>
      </div>
    </div>
  );
};

export default Feedbacks;
