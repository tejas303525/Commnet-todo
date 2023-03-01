import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./Signin.css";
import AccountData from "../components/AccountSection/AccountData";
import Footer from "../components/Footer";
import Menu from "../components/Menu/Menu";
import TasksSection from "../components/TasksSection/TasksSection";



const Signin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const formsubmitted = (event) => {
    event.preventDefault();
    const LoginData = {
      username: username,
      password: password,
    };
    // console.log(LoginData);
    setUsername("");
    setPassword("");
    if (LoginData.username ==="admin" && LoginData.password==="admin"){
      setLoggedIn(true)
    }
    else{
        alert("Incorrect username and password")
    }
    
  };
  
  return (
    <div>
      {loggedIn ?(
        <div>
        <Menu/>
        <TasksSection />
        <Footer />
        <AccountData />
        </div>
      ):(
    <div className="wrap">
      <div className="box">
        <div className="content">
          <form onSubmit={formsubmitted}>
            <h1 className="h1">Login page</h1>
            <div className="input-box">
              <input
                type="Text"
                placeholder="Enter username"
                value={username}
                onChange={usernameHandler}
                required
              />
              <br />
              <i className="fa-solid fa-user"></i>
              <hr />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={passwordHandler}
                required
              />
              <br />
              <i className="fa-solid fa-lock"></i>
              <hr />
            </div>
            <div className="input-box">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )}
    </div>
  );
};

export default Signin;
