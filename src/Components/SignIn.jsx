import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import login from "../utils/asyncActions/login";

const SignIn = ({ setIsSignInModal }) => {
  const responseStatus = useSelector((state) => state.user.signInStatus);
  const usernameFromStore = useSelector((state) => state.user.username);

  const localStorageUsername = window.localStorage.getItem("username");

  const [username, setUsername] = useState(
    usernameFromStore || localStorageUsername
      ? usernameFromStore || localStorageUsername
      : ""
  );
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (responseStatus && responseStatus !== 200) {
      setIsError(true);
    }
  }, [responseStatus]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rememberMe && username && password) {
      window.localStorage.setItem("username", username);
    }

    if (!rememberMe) {
      window.localStorage.removeItem("username");
    }

    dispatch(
      login({
        email: username,
        password,
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
              usernameFromStore || localStorageUsername
                ? usernameFromStore || localStorageUsername
                : ""
            }
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            defaultChecked={rememberMe}
            onClick={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {isError && (
          <p className="errorMessage">UserName/Password does not match</p>
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
