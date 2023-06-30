import Login from "./Login";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import Logout from "./Logout";

const Header = () => {
  const token = useSelector((state) => state.user.token);

  return (
    <nav className="main-nav">
      <Logo />
      {token ? <Logout /> : <Login />}
    </nav>
  );
};

export default Header;
