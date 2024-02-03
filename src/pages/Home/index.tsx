import Navbar from "../../components/Navbar";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-wrapper">
        <main>
          <header className="title">
            <h1 className="title__header">Mend Balance</h1>
            <p className="title__description">
              Mental wellness for the modern man
            </p>
          </header>
        </main>
      </div>
    </>
  );
};

export default Home;
