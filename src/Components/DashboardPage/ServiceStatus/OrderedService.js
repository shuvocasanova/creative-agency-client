import React, { useEffect, useState } from "react";

const OrderedService = ({ service }) => {
  const statusStyle = [
    {
      backgroundColor: "#FFE3E3",
      color: "#FF4545",
      minWidth: "120px",
      display: "inline-block",
      textAlign: "center",
    },
    {
      backgroundColor: "#FED68B",
      color: "#FFBD3E",
      minWidth: "120px",
      display: "inline-block",
      textAlign: "center",
    },
    {
      backgroundColor: "#C6FFE0",
      color: "#009444",
      minWidth: "120px",
      display: "inline-block",
      textAlign: "center",
    },
  ];

  const [icon, setIcon] = useState("");
  useEffect(() => {
    fetch(
      `https://creative-agency-pro.herokuapp.com/singleService/${service.serviceID}`
    )
      .then((response) => response.json())
      .then((data) => setIcon(data.img));
  }, []);
  return (
    <>
      <div className="col-lg-5 p-3 m-2 rounded bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img
              height="74"
              className="rounded-circle"
              src={`data:image/jpeg;base64,${icon}`}
              alt="Service"
            />
          </div>
          <div>
            <span style={statusStyle[service.status]} className="p-2 rounded">
              {service.status === 0 && "Pending"}
              {service.status === 1 && "On Going"}
              {service.status === 2 && "Done"}
            </span>
          </div>
        </div>
        <h4>{service.service}</h4>
        <p>{service.details}</p>
      </div>
    </>
  );
};

export default OrderedService;
