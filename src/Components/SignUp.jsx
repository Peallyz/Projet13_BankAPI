import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import signUp from "../utils/asyncActions/signUp";

const SignUp = ({ setIsSignInModal }) => {
  const responseStatus = useSelector((state) => state.user.signUpStatus);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (responseStatus === 200) {
      setIsSignInModal(true);
    }

    if (responseStatus && responseStatus !== 200) {
      alert("An error occurred. Please try again.");
    }
  }, [responseStatus]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password && firstName && lastName) {
      setIsError(false);

      dispatch(
        signUp({
          email: username,
          password,
          firstName,
          lastName,
        })
      );
    } else {
      setIsError(true);
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign Up</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        {isError && (
          <p className="errorMessage">Fields are not correctly filled</p>
        )}
        <button className="sign-in-button" onClick={handleSubmit}>
          Sign Up
        </button>

        <button
          className="sign-in-button"
          onClick={(e) => {
            e.preventDefault;
            setIsSignInModal(true);
          }}
        >
          Already have an account?
        </button>
      </form>
    </section>
  );
};

SignUp.propTypes = {
  setIsSignInModal: PropTypes.func.isRequired,
};

export default SignUp;
