import React, { Fragment } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./register.css";

function Register() {
  const [warning, setWarning] = useState(false);
  return (
    <Fragment>
      <NavBar />
      <div id="signup-web" className="log">
        <form>
          <div className="input-cont">
            <h2
            className="font-face-pnb"
            ><b>Sign up</b>
              
            </h2>
          </div>

          <div className="authBlock">
            <div className="input-cont formGroup">
              <input
                type="text"
                name="firstname"
                required
                className="formControl"
                placeholder="First name"
                style={{ fontSize: "16px" }}
              />
              <div className="border1"></div>
              <span style={{ color: "red" }} hidden={!warning}>
                {" "}
                First Name is required{" "}
              </span>
            </div>
            <div className="input-cont formGroup">
              <input
                id="lastName"
                type="text"
                name="lastname"
                required
                className="formControl"
                placeholder="Last name"
                style={{ fontSize: "16px" }}
              />
              <div className="border1"></div>
              <span style={{ color: "red" }} hidden={!warning}>
                {" "}
                Last Name is required{" "}
              </span>
            </div>
            <div className="input-cont formGroup">
              <input
                type="text"
                required
                className="formControl"
                name="email"
                placeholder="Email address"
                style={{ fontSize: "16px" }}
              />
              <div className="border1"></div>
              <span style={{ color: "red" }} hidden={!warning}>
                {" "}
                Email is required{" "}
              </span>
            </div>
            <div className="input-cont formGroup">
              <input
                type="password"
                required
                className="formControl"
                name="password"
                placeholder="Password"
                style={{ fontSize: "16px" }}
              />
              <div className="border2"></div>
              <span style={{ color: "red" }} hidden={!warning}>
                {" "}
                Password is required{" "}
              </span>
            </div>

            <div className="input-container formGroup mt-5">
              <Form.Group
                className="mb-3 formGroup font-face-pn"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label={"I agree to the Terms & Condition of the ZeroArmario"}
                />
              </Form.Group>
            </div>

            <div style={{ height: "32px" }}></div>
            <div className="input-cont formGroup d-flex align-items-center justify-content-center">
              <button
                style={{
                  textTransform: "none",
                  borderRadius: "2px",
                }}
                className="button btn-lg btn-block font-face-pn"
              >
                {" "}
                Create a new account
              </button>
            </div>
            <br />
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Register;
