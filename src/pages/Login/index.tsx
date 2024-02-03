import Navbar from "../../components/Navbar";

import "./Login.css";

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Login</h1>

        <form>
          <div className="login__email-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="login__password-container">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
