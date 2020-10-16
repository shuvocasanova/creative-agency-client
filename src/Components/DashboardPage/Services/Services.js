import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import SingleService from "./SingleService";
import DotLoader from "react-spinners/DotLoader";

const Services = () => {
  document.title = "ALL Services | Creative Agency";
  const [orders, setOrders] = useState([]);
  const [loginUser, setLoginUser] = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  const override = `
  display: block;
  margin: 0 auto;
  border-color: #fbd062;
`;

  useEffect(() => {
    fetch("https://creative-agency-pro.herokuapp.com/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {!loginUser.isAdmin && <Redirect to="/dashboard/order" />}
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <AdminSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          <div style={{ borderRadius: "1.25rem" }} className="bg-white p-5">
            <table className="table bg-white">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Service</th>
                  <th scope="col">Project Details</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((info) => (
                    <SingleService info={info} key={info._id} />
                  ))
                ) : (
                  <>
                    {!loading && (
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center display-4 text-muted"
                        >
                          Empty
                        </td>
                      </tr>
                    )}
                  </>
                )}
              </tbody>
            </table>
            <DotLoader
              css={override}
              size={200}
              color={"orange"}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
