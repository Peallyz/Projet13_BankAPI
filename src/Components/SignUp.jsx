import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import signUp from "../utils/asyncActions/signUp";
import { useState } from "react";

const SignUp = ({ setIsSignInModal }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const responseStatus = useSelector((state) => state.user.signUpStatus);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (responseStatus === 200) {
      setIsSignInModal(true);
    }

    if (responseStatus && responseStatus !== 200) {
      alert("An error occured. Please try again.");
    }
  }, [responseStatus]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      usernameRef.current.value ||
      passwordRef.current.value ||
      firstNameRef.current.value ||
      lastNameRef.current.value
    ) {
      setIsError(false);
      dispatch(
        signUp({
          email: usernameRef.current.value,
          password: passwordRef.current.value,
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
          <input type="text" id="username" ref={usernameRef} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">Firstname</label>
          <input type="firstname" id="firstname" ref={firstNameRef} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Lastname</label>
          <input type="lastname" id="lastname" ref={lastNameRef} required />
        </div>
        {isError ? (
          <p className="errorMessage">Fields are not correctly filled</p>
        ) : (
          ""
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
