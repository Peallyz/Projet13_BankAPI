import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src="./img/argentBankLogo.png"
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
  );
};

export default Logo;
