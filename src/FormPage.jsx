import { useState } from "react";
import { Link } from "react-router";

export default function FormPage(props) {
  const [isOn, setIsOn] = useState(false);
  function recaptchaHandler() {
    setIsOn((prev) => !prev);
  }
  return (
    <div className="form-page d-flex flex-column align-items-center">
      <header className="mt-4 mb-5">
        <img src="images/ChatGPT Logo (1).svg" alt="" className="logo" />
      </header>
      <main className="d-flex flex-column w-50 my-3 mx-auto align-items-center justify-content-between">
        <h3 className="fw-bold">
          {props.page === "login" ? "Welcome back" : "Create an account"}
        </h3>
        <form
          action=""
          className="my-3 position-relative w-50 d-flex flex-column justify-content-between"
        >
          <input
            type="email"
            className="email-input mb-2 rounded-1 w-100 border-gray px-3 py-2"
          />
          <label htmlFor="" className="email-label px-1 position-absolute">
            Email address*
          </label>
          <div className="mb-4 p-2 d-flex justify-content-between border-gray rounded-1 align-items-center">
            <div className="d-flex w-50 align-items-center">
              <button className={`checkbox ${isOn && "checked"}`} onClick={recaptchaHandler}>
                
              </button>
              <span className="mx-2">I'm not a robot</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img
                src="images/recaptcha logo.svg"
                alt=""
                className="recaptcha-logo"
              />
              <span style={{ fontSize: "10px" }}>reCAPTCHA</span>
              <span style={{ fontSize: "8px" }}>Privacy - Terms</span>
            </div>
          </div>
          <Link to="/chatbot" className="d-block text-center py-2 rounded-1">
            Continue
          </Link>
        </form>
        <p>
          Don't have an account?{" "}
          <Link
            to={`/${props.page === "login" ? "Sign Up" : "Login"}`}
            className="change-page-btn"
          >
            {props.page === "login" ? "Sign Up" : "Login"}
          </Link>
        </p>
        <div className="position-relative w-50 text-center bg-primary">
          <span className="position-absolute span px-3">OR</span>
          <div className="line"></div>
        </div>
      </main>
    </div>
  );
}
