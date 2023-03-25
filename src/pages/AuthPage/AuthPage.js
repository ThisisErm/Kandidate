import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import { useState } from "react";
import "./AuthPage.css";
import logo from "../../images/default.png";

export default function AuthPage({ setUser }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="auth-page">
        <div className="form-container">
          <div className="logo"><img src={logo} alt="Kandidate" /></div>

          {!showForm ? (
            <>
              <LogInForm setUser={setUser} />
              <p>
                Don't have an account yet? <br />
                Sign up{" "}
                <span className="login-anchor" onClick={() => setShowForm(!showForm)}>
                  <a href="#">here</a>
                </span>
              </p>
            </>
          ) : (
            <>
              <SignUpForm setUser={setUser} />
              <p>
                Already have an account?{" "}
                <span className="login-anchor" onClick={() => setShowForm(!showForm)}>
                  <a href="#">Log in</a>
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
