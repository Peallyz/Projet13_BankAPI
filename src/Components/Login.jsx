import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <NavLink to="/login" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </div>
  );
};

export default Login;
