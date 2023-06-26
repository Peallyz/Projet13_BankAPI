const SignUp = ({ setIsSignInModal }) => {
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign Up</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">Firstname</label>
          <input type="firstname" id="firstname" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Lastname</label>
          <input type="lastname" id="lastname" />
        </div>

        <button
          className="sign-in-button"
          onClick={(e) => {
            e.preventDefault;
            setIsSignInModal(true);
          }}
        >
          Sign In
        </button>

        <button className="sign-in-button">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
