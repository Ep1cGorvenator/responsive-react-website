import React from "react";
import './Register.css';
import { Button } from "./Button";

// just a basic extra addition
function Register() {
  return (
    <>
      <div className="form-container">
        <form className="signup-form">
        <h2>Enter your details to Sign-Up:</h2>
          <input
            type="text"
            name="username"
            placeholder="Your Username ..."
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email ..."
            className="form-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password ..."
            className="form-input"
          />
          <Button buttonStyle='btn--primary' buttonSize='btn--medium'>REGISTER</Button>
        </form>
      </div>
    </>
  );
}

export default Register;
