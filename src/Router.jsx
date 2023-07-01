import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import { useSelector } from "react-redux";

const Router = () => {
  const isLogged = useSelector((state) => Boolean(state.user.token));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={isLogged ? <Navigate to="/profile" /> : <Login />}
        />

        <Route
          path="/profile"
          element={isLogged ? <Account /> : <Navigate to="/" />}
        />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
