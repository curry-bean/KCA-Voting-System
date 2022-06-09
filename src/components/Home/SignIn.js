import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/userActions";
import ErrorMessage from "../../helpers/ErrorMessage";
import Loading from "../../helpers/Loading";
import classes from "./auth.module.css";
const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.userLog);
  const { userInfo, loading, error } = userLog;
  const history = useNavigate()

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if(userInfo){
     history('/')
    }
  },[history,userInfo])


  return (
    <>
      <Container>
        <div className={classes.center}>
          <div className={classes.loginContainer}>
            {loading && <Loading />}
            <div className={classes.logo}>
              <i class="fas fa-user"></i>
              <span>SignIn</span>
             {
                error && <ErrorMessage>{error}</ErrorMessage>
              }
            </div>
            <div>
              <form onSubmit={HandleFormSubmit} className={classes.form}>
                <input
                  required
                  type="email"
                  value={email}
                  placeholder="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  required
                  type="password"
                  placeholder="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className={classes.action}>
                  <button type="submit">SignIn</button>
                </div>
              </form>

              <br />
              <span>
                Don't have an account?{" "}
                <Link
                  style={{
                    color: "#DE4D40",
                    fontSize: "15px",
                    textDecoration: "underline",
                  }}
                  to="/register"
                >
                  SignUp
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignIn;
