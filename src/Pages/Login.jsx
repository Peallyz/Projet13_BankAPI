import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";

const Login = () => {
  const [isSignInModal, setIsSignInModal] = useState(true);

  return (
    <>
      <Header />
      <main className="main bg-dark">
        {isSignInModal ? (
          <SignIn setIsSignInModal={setIsSignInModal} />
        ) : (
          <SignUp setIsSignInModal={setIsSignInModal} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Login;
