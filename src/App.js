import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/HomePage/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import DashboardPage from "./Components/DashboardPage/DashboardPage";
import Order from "./Components/DashboardPage/Order/Order";
import ServiceStatus from "./Components/DashboardPage/ServiceStatus/ServiceStatus";
import Review from "./Components/DashboardPage/Review/Review";
import Services from "./Components/DashboardPage/Services/Services";
import AddService from "./Components/DashboardPage/AddService/AddService";
import MakeAdmin from "./Components/DashboardPage/MakeAdmin/MakeAdmin";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const secessionUser = sessionStorage.getItem("creativeUser");
  const userInfo = secessionUser ? JSON.parse(secessionUser) : {};
  const [loginUser, setLoginUser] = useState(userInfo);
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/dashboard/order/:serviceID">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/service-status">
            <ServiceStatus />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/services">
            <Services />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/add-service">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/make-admin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <DashboardPage />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
