import Navbar from "../../components/Navbar";

import "./NoPage.css";

const NoPage = () => {
  return (
    <>
      <Navbar />

      <div className="no-page">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
    </>
  );
};

export default NoPage;
