import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../utils/slice/user.slice";

const Logout = () => {
  const dispatch = useDispatch();

  const firstname = useSelector((state) => state.user.firstname);
  const username = useSelector((state) => state.user.username);

  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <div>
      <NavLink className="main-nav-item" to="/account">
        <i className="fa fa-user-circle"></i>
        {firstname ? firstname : username}
      </NavLink>
      <button className="main-nav-item" onClick={handleSignOut}>
        <i className="fa fa-sign-out"></i>
        Sign Out
      </button>
    </div>
  );
};

export default Logout;
