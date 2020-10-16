import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import googleIcon from "../../images/icons/googleIcon.png";
import "./LoginPage.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { UserContext } from "../../App";

const LoginPage = () => {
  document.title = "Login | Creative Agency";

  const [loginUser, setLoginUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  function handleGoogleLogin() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        const user = result.user;
        fetch("https://creative-agency-pro.herokuapp.com/user-role", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        })
          .then((response) => response.json())
          .then((data) => {
            const userInfo = {
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              ...data,
            };
            setLoginUser(userInfo);
            sessionStorage.setItem("creativeUser", JSON.stringify(userInfo));
            history.replace(from);
          });
      });
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="d-block mx-auto my-5"
          src={logo}
          alt="Creative Agency"
        />
      </Link>
      <section className="login-area p-5">
        <h3 className="text-center mb-5">Login With</h3>
        <p
          onClick={handleGoogleLogin}
          className="google-login"
          style={{ cursor: "pointer" }}
        >
          <img height="34" src={googleIcon} alt="Google Icon" />
          <span>Continue with Google</span>
        </p>
        <p className="text-center"onClick={handleGoogleLogin}>
          
          Don't have an account?{" "}
          <Link to="/login" className="text-primary">
            Create an account
          </Link>
        </p>
      </section>
    </div>
  );
};

export default LoginPage;
