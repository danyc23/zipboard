import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="login">
      <div className="login-main__container">
        <div className="login-border">
          <div className="login-title__container">
            <h1 className="login-title">Login</h1>
          </div>
          <section className="login-form">
            <div className="login-container">
              <label className="login-label" for="email">
                Email
              </label>
              <input
                className="login-input"
                type="email"
                value={email}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-container">
              <label className="login-label" for="password">
                Password
              </label>
              <input
                className="login-input"
                type="password"
                value={password}
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-container login-container--last">
              <div>
                <button className="login-btn" type="submit">
                  Log in
                </button>
                <input type="checkbox" name="remember" />
                <label className="login-checkbox__text">Remember me</label>
              </div>
              <div className="login-container__remember">
                <div>
                  <Link to="/">
                    <button className="login-container__remember-btn">
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </form>
  );
}

export default Login;
