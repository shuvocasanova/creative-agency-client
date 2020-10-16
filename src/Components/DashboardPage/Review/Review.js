import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import UserSidebar from "../UserSidebar/UserSidebar";
import DotLoader from "react-spinners/DotLoader";

const Review = () => {
  document.title = "Customer Review  Creative Agency";
  const history = useHistory();
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [formInput, setFormInput] = useState({
    photoURL: loginUser.photoURL,
    name: loginUser.name,
  });

  const [loading, setLoading] = useState(false);
  const override = `
  display: block;
  margin: 0 auto;
  border-color: #fbd062;
  `;

  const handleOnBlur = (e) => {
    function handleInput() {
      const newInput = { ...formInput };
      newInput[e.target.name] = e.target.value;
      setFormInput(newInput);
    }

    e.target.value.length > 0
      ? handleInput()
      : alert("Please Enter Valid Information.");
  };

  const handleSubmit = (e) => {
    if (formInput.name && formInput.company && formInput.description) {
      setLoading(true);
      fetch("https://creative-agency-pro.herokuapp.com/addFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formInput),
      }).then((res) => {
        alert("Thank You For Your Review.");
        history.push("/");
      });
    } else {
      alert("Please Fill up the form!");
    }
    e.preventDefault();
  };
  return (
    <>
      <DashboardHeader />
      <div className="row p-4 ml-5 mt-4">
        <div className="col-3">
          <UserSidebar />
        </div>
        <div className="col-9 p-5 dashboard-content">
          {loading ? (
            <DotLoader
              css={override}
              size={200}
              color={"orange"}
              loading={loading}
            />
          ) : (
            <form action="#" onSubmit={handleSubmit}>
              <input
                onBlur={handleOnBlur}
                name="name"
                required
                className="form-control p-4"
                type="text"
                placeholder="Your name"
                defaultValue={loginUser.name}
              />
              <input
                onBlur={handleOnBlur}
                name="company"
                required
                className="form-control p-4 my-2"
                type="text"
                placeholder="Company’s name, Designation"
              />
              <textarea
                onBlur={handleOnBlur}
                name="description"
                required
                rows="5"
                className="form-control p-4 my-2"
                type="text"
                placeholder="Description"
              />
              <button type="submit" className="btn btn-dark px-5 py-2 mt-2">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Review;
