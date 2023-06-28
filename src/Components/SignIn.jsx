import { PropTypes } from "prop-types";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import login from "../utils/asyncActions/login";
import { useState } from "react";

const SignIn = ({ setIsSignInModal }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberMeRef = useRef(null);

  const responseStatus = useSelector((state) => state.user.signInStatus);
  const username = useSelector((state) => state.user.username);
  const localStorageEmail = window.localStorage.getItem("email");

  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (rememberMeRef.current.checked && responseStatus === 200) {
      window.localStorage.setItem("email", usernameRef.current.value);
    }

    if (responseStatus === 200) {
      setIsError(false);
      navigate("/account");
    }

    if (responseStatus && responseStatus !== 200) {
      setIsError(true);
    }
  }, [responseStatus, navigate]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rememberMeRef.current.checked) {
      window.localStorage.removeItem("email");
    }

    rememberMeRef.current.checked;
    dispatch(
      login({
        email: usernameRef.current.value,
        password: passwordRef.current.value,
      })
    );
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            defaultValue={
              username || localStorageEmail ? username || localStorageEmail : ""
            }
            ref={usernameRef}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" ref={rememberMeRef} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {isError ? (
          <p className="errorMessage">UserName/Password does not match</p>
        ) : (
          ""
        )}
        <button className="sign-in-button" onClick={handleSubmit}>
          Sign In
        </button>
        <button
          role="button"
          className="sign-in-button"
          onClick={(e) => {
            e.preventDefault;
            setIsSignInModal(false);
          }}
        >
          Create an account
        </button>
      </form>
    </section>
  );
};

SignIn.propTypes = {
  setIsSignInModal: PropTypes.func.isRequired,
};

export default SignIn;
