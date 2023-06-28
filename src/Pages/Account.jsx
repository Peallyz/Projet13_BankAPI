import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getProfile from "../utils/asyncActions/getProfile";
import Footer from "../Components/Footer";

const Account = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userToken = useSelector((state) => state.user.token);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);

  useEffect(() => {
    if (!userToken) {
      navigate("/login");
    }
    if (!firstname || !lastname) {
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
            {`${firstname} ${lastname}`}!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
      </main>
      <Footer />
    </>
  );
};

export default Account;
