import React, { useContext } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logo.png";

const DashboardHeader = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);

  const page = window.location.pathname.split("/");
  let pageName;
  if (page[2] === "order") {
    pageName = "Order";
  } else if (page[2] === "service-status") {
    pageName = "Service List";
  } else if (page[2] === "review") {
    pageName = "Review";
  } else if (page[2] === "services") {
    pageName = "Service List";
  } else if (page[2] === "add-service") {
    pageName = "Add Service";
  } else if (page[2] === "make-admin") {
    pageName = "Make Admin";
  } else {
    pageName = " ";
  }

  let history = useHistory();
  function handleSignOut() {
    sessionStorage.removeItem("creativeUser");
    setLoginUser({});
    history.push("/");
  }
  return (
    <div className="row mt-5">
      <div className="col-3 ml-5">
        <Link to="/">
          <img src={logo} alt="Creative Agency" />
        </Link>
      </div>
      <div className="col-8 mx-auto d-flex justify-content-between">
        <h4>{pageName}</h4>
        <h4 className="user-name">
          <img
            style={{ height: "55px", width: "50px", marginRight: "10px" }}
            className="img-fluid rounded-circle"
            src={loginUser.photoURL}
            alt={loginUser.name}
          />
          {loginUser.name}
          <button
            onClick={handleSignOut}
            className="btn btn-danger user-logout"
          >
            Logout
          </button>
        </h4>
      </div>
    </div>
  );
};

export default DashboardHeader;
