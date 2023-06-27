import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import signUp from "../utils/asyncThunk/signUp";

const SignUp = ({ setIsSignInModal }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const responseStatus = useSelector((state) => state.user.signUpStatus);

  useEffect(() => {
    if (responseStatus === 200) {
      setIsSignInModal(true);
    }

    if (responseStatus && responseStatus !== 200) {
      alert("Invalid form");
    }
  }, [responseStatus]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUp({
        email: usernameRef.current.value,
        password: passwordRef.current.value,
      })
    );
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
