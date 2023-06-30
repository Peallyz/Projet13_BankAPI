import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Error = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Error;
