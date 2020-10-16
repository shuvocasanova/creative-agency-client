import React, { useState } from "react";

const SingleService = ({ info }) => {
  const optionStyle = [
    { color: "#FF4545" },
    { color: "#FFBD3E" },
    { color: "#009444" },
  ];

  const [selectedOption, setSelectedOption] = useState(info.status);
  function statusChange(e) {
    setSelectedOption(e.target.value);
    fetch("https://creative-agency-pro.herokuapp.com/updateOrderStatus", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id: info._id, status: e.target.value }),
    });
  }
  return (
    <tr>
      <td scope="row">{info.name}</td>
      <td>{info.email}</td>
      <td>{info.service}</td>
      <td>{info.details}</td>
      <td>
        <select
          value={selectedOption}
          onChange={statusChange}
          style={optionStyle[selectedOption]}
          className="border-0"
        >
          <option value="0" style={optionStyle[0]}>
            Pending
          </option>
          <option value="1" style={optionStyle[1]}>
            On going
          </option>
          <option value="2" style={optionStyle[2]}>
            Done
          </option>
        </select>
      </td>
    </tr>
  );
};

export default SingleService;
