import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../App";

const DashboardPage = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  return (
    <>
      {loginUser.isAdmin ? (
        <Redirect to="/dashboard/services" />
      ) : (
        <Redirect to="/dashboard/service-status" />
      )}
    </>
  );
};

export default DashboardPage;
