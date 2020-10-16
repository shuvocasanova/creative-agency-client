import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCubes, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const page = window.location.pathname.split("/");
  return (
    <div className="mt-5 sidebar">
      <ul>
        <li className={page[2] === "services" ? "sidebar-active" : undefined}>
          <Link to="/dashboard/services">
            <FontAwesomeIcon icon={faCubes} /> Service list
          </Link>
        </li>
        <li
          className={page[2] === "add-service" ? "sidebar-active" : undefined}
        >
          <Link to="/dashboard/add-service">
            <FontAwesomeIcon icon={faPlus} /> Add Service
          </Link>
        </li>
        <li className={page[2] === "make-admin" ? "sidebar-active" : undefined}>
          <Link to="/dashboard/make-admin">
            <FontAwesomeIcon icon={faUserPlus} /> Make Admin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
