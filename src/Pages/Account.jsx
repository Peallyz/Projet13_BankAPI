import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getProfile from "../utils/asyncActions/getProfile";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useRef } from "react";
import updateProfile from "../utils/asyncActions/updateProfile";

const Account = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const newFirstName = useRef(null);
  const newLastName = useRef(null);

  const userToken = useSelector((state) => state.user.token);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const username = useSelector((state) => state.user.username);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        token: userToken,
        firstname: newFirstName.current.value,
        lastname: newLastName.current.value,
      })
    );
    setIsFormOpen(false);
  };

  useEffect(() => {
    if (!userToken) {
      navigate("/login");
    }
    if (firstname === null || lastname === null) {
      dispatch(getProfile(userToken));
    }
  }, [firstname, lastname, userToken]);
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${firstname ? firstname : username} ${lastname ? lastname : ""}`}!
          </h1>
          <button
            className="edit-button"
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            {isFormOpen ? "Close form" : "Edit Name"}
          </button>
          {isFormOpen && (
            <form className="edit-form">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder={firstname ? firstname : "First Name"}
                ref={newFirstName}
              />
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder={lastname ? lastname : "Last Name"}
                ref={newLastName}
              />
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
      </main>
      <Footer />
    </>
  );
};

export default Account;
