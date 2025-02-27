import { Link } from "react-router";

export default function WelcomePage() {
    return (
        <div className="welcome-page d-flex flex-column align-items-center justify-content-center">
            <img src="images/ChatGPT Logo.svg" alt="" className="logo my-3" />
            <h6>Welcome to ChatGPT</h6>
            <p>Log in with your OpenAI account to continue</p>
            <div className="my-2">
                <Link to="/login" className="login-btn mx-2 py-2 px-3 rounded-1">Log in</Link>
                <Link to="/signup" className="signup-btn mx-2 py-2 px-3 rounded-1">Sign up</Link>
            </div>
        </div>
    )
}