import Navbar from "../../components/Navbar";

import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Sign Up</h1>

        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
