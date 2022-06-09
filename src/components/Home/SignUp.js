import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../actions/userActions";
import ErrorMessage from "../../helpers/ErrorMessage";
import Loading from "../../helpers/Loading";
import classes from "./auth.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const userReg = useSelector((state) => state.userReg);
  const { userInfo, loading, error } = userReg;
  const history = useNavigate();

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setErrorMsg("Passwords do no Match");
    } else {
      dispatch(register(username, email, phone, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  }, [history, userInfo]);

  return (
    <>
      <Container>
        <div className={classes.center}>
          <div className={classes.loginContainer}>
            {loading && <Loading />}
            <div className={classes.logo}>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              {errormsg && <ErrorMessage>{errormsg}</ErrorMessage>}
              <span>Create Account</span>
            </div>
            <div>
              <form onSubmit={HandleFormSubmit} className={classes.form}>
                <input
                  required
                  type="text"
                  placeholder="username"
                  value={username}
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  required
                  type="email"
                  placeholder="email"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  required
                  type="text"
                  placeholder="phone-number"
                  value={phone}
                  autoComplete="off"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  required
                  type="password"
                  placeholder="password"
                  value={password}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  required
                  type="password"
                  placeholder="confirm password"
                  autoComplete="off"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className={classes.action}>
                  <button type="submit">Sign Up</button>
                </div>
              </form>

              <br />
              <span>
                Already have an account?{" "}
                <Link
                  style={{
                    color: "#DE4D40",
                    fontSize: "15px",
                    textDecoration: "underline",
                  }}
                  to="/login"
                >
                  Sign In
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
