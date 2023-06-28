import { NavLink } from "react-router-dom";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../utils/slice/user.slice";

const Header = () => {
  const firstname = useSelector((state) => state.user.firstname);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {firstname ? (
        <div>
          <NavLink className="main-nav-item" to="/account">
            <i className="fa fa-user-circle"></i>
            {firstname}
          </NavLink>
          <button className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      ) : (
        <Login />
      )}
    </nav>
  );
};

export default Header;
