import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const AddService = () => {
  document.title = "Add Service| Creative Agency";
  const [formInput, setFormInput] = useState({});
  const [fileInput, setFileInput] = useState(null);
  const [loginUser, setLoginUser] = useContext(UserContext);

  const handleFile = (e) => {
    setFileInput(e.target.files[0]);
  };

  const handleOnBlur = (e) => {
    function handleInput() {
      const newInput = { ...formInput };
      newInput[e.target.name] = e.target.value;
      setFormInput(newInput);
    }

    e.target.value.length > 3
      ? handleInput()
      : alert("Please Enter Valid Information.");
  };

  const handleSubmit = (e) => {
    if (formInput.title && formInput.description) {
      //submit form
      const formData = new FormData();
      formData.append("file", fileInput);
      formData.append("title", formInput.title);
      formData.append("description", formInput.description);
      fetch("https://creative-agency-pro.herokuapp.com/add-service", {
        method: "POST",
        body: formData,
      }).then((res) => alert("Service added."));
    } else {
      alert("Please Fill up the form!");
    }
    e.preventDefault();
  };
  return (
    <>
      {!loginUser.isAdmin && <Redirect to="/dashboard/order" />}
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <AdminSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <form action="#">
            <div
              style={{ borderRadius: "1.25rem" }}
              className="row p-4 bg-white"
            >
              <div className="col-md-6">
                <h5>
                  <label htmlFor="service-title">Service Title</label>
                </h5>
                <input
                  onBlur={handleOnBlur}
                  name="title"
                  id="service-title"
                  required
                  className="form-control p-4 mb-2"
                  type="text"
                  placeholder="Enter Title"
                />
                <h5>
                  <label htmlFor="description">Description</label>
                </h5>
                <textarea
                  onBlur={handleOnBlur}
                  name="description"
                  id="description"
                  required
                  rows="5"
                  className="form-control p-4"
                  type="text"
                  placeholder="Enter Description"
                />
              </div>
              <div
                style={{ minHeight: "100px" }}
                className="col-md-6 custom-file w-md-50"
              >
                <h5>Icon</h5>
                <label htmlFor="upload-file">Upload Image</label>
                <input
                  onChange={handleFile}
                  required
                  id="upload-file"
                  type="file"
                />
              </div>
            </div>
            <div className="text-right">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-success px-5 py-2 mt-2 border"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddService;
