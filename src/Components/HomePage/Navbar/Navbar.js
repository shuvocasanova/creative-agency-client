import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logo.png";

const Navbar = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  function shoot() {
    alert("Coming Soon Thank You");
  }
  return (
    <nav
      style={{ maxWidth: "1200px", margin: "0 auto" }}
      className="navbar navbar-expand-sm navbar-light"
    >
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <div
        className="collapse navbar-collapse show"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item px-2 active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="#" onClick={shoot}>
              Our Portfolio
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="#" onClick={shoot}>
              Our Team
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="#" onClick={shoot}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item px-2">
            {loginUser.email ? (
              <Link className="btn btn-dark text-white px-3" to="/dashboard">
                {loginUser.name}
              </Link>
            ) : (
              <Link className="btn btn-dark text-white px-3" to="/login">
                Login
              </Link>
            )}

            {/* <Link className="btn btn-dark text-white px-3" to="/login">
              Login
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
