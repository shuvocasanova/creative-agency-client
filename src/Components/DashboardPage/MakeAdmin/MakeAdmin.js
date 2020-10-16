import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const MakeAdmin = () => {
  document.title = "Make Admin | Creative Agency";
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [newAdmin, setNewAdmin] = useState("");

  function handleOnBlur(e) {
    setNewAdmin(e.target.value);
  }

  function handleSubmit(e) {
    if (newAdmin) {
      fetch("https://creative-agency-pro.herokuapp.com/makeAdmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newAdmin, currentUser: loginUser.email }),
      }).then(() => {
        alert(`${newAdmin} is an Admin Now.`);
      });
    } else {
      alert("Please add a valid email!");
    }
    e.preventDefault();
  }
  return (
    <>
      {!loginUser.isAdmin && <Redirect to="/dashboard/order" />}
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <AdminSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <div style={{ borderRadius: "1.25rem" }} className="row p-4 bg-white">
            <form action="#" className="w-100" onSubmit={handleSubmit}>
              <h5>
                <label htmlFor="email">Email</label>
              </h5>
              <div className="row">
                <div className="col-md-6">
                  <input
                    onBlur={handleOnBlur}
                    id="email"
                    required
                    className="form-control p-4 mb-2"
                    type="text"
                    placeholder="jon@gmail.com"
                  />
                </div>
                <div className="col-md-3">
                  <button
                    style={{ height: "50px" }}
                    className="btn btn-success px-5 mb-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
