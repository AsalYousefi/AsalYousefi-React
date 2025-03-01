import { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function FormPage(props) {
  const [isOn, setIsOn] = useState(false);
  function recaptchaHandler(e) {
    e.preventDefault();
    setIsOn((prev) => !prev);
  }
  return (
    <div className="form-page d-flex flex-column align-items-center">
      <header className="mt-3 mb-4">
        <img src="images/ChatGPT Logo (1).svg" alt="" className="form-logo" />
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
            className="email-input mb-2 rounded-1 w-100 border-gray px-3 py-75"
          />
          <label htmlFor="" className="email-label px-1 position-absolute">
            Email address*
          </label>
          <div className="mb-4 p-2 d-flex justify-content-between border-gray rounded-1 align-items-center">
            <div className="d-flex w-50 align-items-center">
              <button
                type="button"
                className={`checkbox ${isOn && "checked"}`}
                onClick={recaptchaHandler}
              >
                {isOn && <FontAwesomeIcon icon={faCheck} />}
              </button>
              <span className="mx-2">I'm not a robot</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img
                src="images/recaptcha logo.svg"
                alt=""
                className="form-logo"
              />
              <span style={{ fontSize: "10px" }}>reCAPTCHA</span>
              <span style={{ fontSize: "8px" }}>Privacy - Terms</span>
            </div>
          </div>
          <Link to="/chatbot" className="d-block text-center py-75 rounded-1">
            Continue
          </Link>
        </form>
        <p className="mb-4">
          Don't have an account?
          <Link
            to={`/${props.page === "login" ? "signup" : "login"}`}
            className="change-page-btn mx-1"
          >
            {props.page === "login" ? "Sign Up" : "Login"}
          </Link>
        </p>
        <div className="position-relative w-50 text-center">
          <span className="position-absolute span px-3" style={{fontSize: "12px"}}>OR</span>
          <div className="line"></div>
        </div>
        <div className="border-gray w-50 mt-4 my-1 py-75 rounded-1">
          <img src="images/Google Logo.svg" alt="" className="mx-3" />
          <span>Continue with Google</span>
        </div>
        <div className="border-gray w-50 my-1 py-75 rounded-1">
          <img src="images/Microsoft Logo.svg" alt="" className="mx-3" />
          <span>Continue with Microsoft Account</span>
        </div>
      </main>
    </div>
  );
}
