import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCommentDots,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  const page = window.location.pathname.split("/");

  return (
    <div className="sidebar">
      <ul>
        <li className={page[2] === "order" ? "sidebar-active" : undefined}>
          <a href="/#services">
            <FontAwesomeIcon icon={faShoppingCart} /> Order
          </a>
        </li>
        <li
          className={
            page[2] === "service-status" ? "sidebar-active" : undefined
          }
        >
          <Link to="/dashboard/service-status">
            <FontAwesomeIcon icon={faCubes} /> Service list
          </Link>
        </li>
        <li className={page[2] === "review" ? "sidebar-active" : undefined}>
          <Link to="/dashboard/review">
            <FontAwesomeIcon icon={faCommentDots} /> Review
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
