import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import { useEffect } from "react";

import getProfile from "../utils/asyncActions/getProfile";
import Footer from "../Components/Footer";
import { useState } from "react";
import EditForm from "../Components/EditForm";

const Account = () => {
  const dispatch = useDispatch();

  const userToken = useSelector((state) => state.user.token);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const username = useSelector((state) => state.user.username);

  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
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
          {isFormOpen && <EditForm setIsFormOpen={setIsFormOpen} />}
        </div>
        <h2 className="sr-only">Accounts</h2>
      </main>
      <Footer />
    </>
  );
};

export default Account;
