import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import UserSidebar from "../UserSidebar/UserSidebar";
import DotLoader from "react-spinners/DotLoader";
import "./Order.css";

const Order = () => {
  document.title = "Order - Dashboard | Creative Agency";
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [fileInput, setFileInput] = useState(null);
  const [formInput, setFormInput] = useState({});
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  const serviceID = useParams().serviceID;
  useEffect(() => {
    fetch(
      `https://creative-agency-pro.herokuapp.com/singleService/${serviceID}`
    )
      .then((response) => response.json())
      .then((data) => {
        const newInfo = { ...formInput };
        newInfo.service = data.title;
        setFormInput(newInfo);
      });
  }, []);

  const handleFile = (e) => {
    setFileInput(e.target.files[0]);
  };

  function handleInput(e) {
    const newInput = { ...formInput };
    newInput[e.target.name] = e.target.value;
    setFormInput(newInput);
  }
  const handleOnBlur = (e) => {
    if (e.target.name === "name") {
      e.target.value.length > 3
        ? handleInput(e)
        : alert("Please Enter Your FUll Name.");
    } else if (e.target.name === "details") {
      e.target.value.length > 5
        ? handleInput(e)
        : alert("Please add some details");
    } else if (e.target.name === "price") {
      e.target.value.length > 0 ? handleInput(e) : alert("Price must Require!");
    }
  };

  const handleSubmit = (e) => {
    if (formInput.details && formInput.price && fileInput) {
      setLoading(true);
      //submit form
      const formData = new FormData();
      formData.append("file", fileInput);
      formData.append("name", loginUser.name);
      formData.append("email", loginUser.email);
      formData.append("service", formInput.service);
      formData.append("serviceID", serviceID);
      formData.append("details", formInput.details);
      formData.append("price", formInput.price);
      fetch("https://creative-agency-pro.herokuapp.com/submit-order", {
        method: "POST",
        body: formData,
      }).then((res) => history.push("/dashboard/service-status"));
    } else {
      alert("Please Fill up the form!");
    }
    e.preventDefault();
  };
  return (
    <>
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <UserSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <div className="row">
            <div className="col-6">
              <DotLoader
                css={override}
                loading={loading}
                size={200}
                color={"orange"}
              />
              {!loading && (
                <form action="#">
                  <input
                    name="name"
                    onBlur={handleOnBlur}
                    required
                    className="form-control p-4"
                    type="text"
                    placeholder="Your name / company’s name"
                    defaultValue={loginUser.name}
                  />
                  <input
                    readOnly
                    name="email"
                    required
                    className="form-control p-4 my-2 bg-white"
                    type="text"
                    placeholder="Your email address"
                    defaultValue={loginUser.email}
                  />
                  <input
                    readOnly
                    name="service"
                    required
                    className="form-control p-4 my-2 bg-white"
                    type="text"
                    placeholder="Service"
                    defaultValue={formInput.service}
                  />
                  <textarea
                    name="details"
                    onBlur={handleOnBlur}
                    required
                    rows="5"
                    className="form-control p-4 my-2"
                    type="text"
                    placeholder="Project Details"
                  />
                  <div className="row">
                    <div className="col-6">
                      <input
                        name="price"
                        onBlur={handleOnBlur}
                        required
                        className="form-control p-4"
                        type="text"
                        placeholder="Price"
                      />
                    </div>
                    <div className="col-6 custom-file">
                      <label htmlFor="upload-file">Upload Project File</label>
                      <input
                        name="file"
                        onChange={handleFile}
                        required
                        id="upload-file"
                        type="file"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn bg-white px-5 py-2 mt-2 border"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
