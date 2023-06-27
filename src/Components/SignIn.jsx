import { PropTypes } from "prop-types";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import login from "../utils/asyncThunk/login";

const SignIn = ({ setIsSignInModal }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const responseStatus = useSelector((state) => state.user.signInStatus);

  const navigate = useNavigate();

  useEffect(() => {
    if (responseStatus === 200) {
      navigate("/home");
    }

    if (responseStatus && responseStatus !== 200) {
      alert("Invalid username or password");
    }
  }, [responseStatus, navigate]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <input type="text" id="username" ref={usernameRef} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
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
