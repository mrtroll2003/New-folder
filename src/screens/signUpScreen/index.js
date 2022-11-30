import React, { useState } from "react";
import "./styles.css";
import { IC_User, IC_Lock } from "../../assets/icons";
import SnackBar from "react-material-snackbar";
import ReactSnackBar from "react-js-snackbar";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "../home";

export default function SignUp() {
  let auth = getAuth();
  const [data, setData] = useState({});
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSubmit = () => {
    //createUserWithEmailAndPassword(auth, data.email, data.password)
    if (data.password.Length < 6) {
      // snackbar = Snackbar.make(activity_criar_conta, "Your password must have at least 6 characters.", Snackbar.LENGTH_SHORT);
      // snackbar.show();
      alert("Your password must have at least 6 characters.");
      return;
    }
    const pass2 = data.confirmPassword.getText().toString();
    if (!data.password.equals(pass2)) {
      alert("Passwords ummatched, confirmation failed.");
      return;
      // return (
      //     <SnackBar open={true} show={true} timer={3000}>
      //         <p>Passwords ummatched, confirmation failed.</p>
      //     </SnackBar>
      // )
    }

    createUserWithEmailAndPassword(auth, data.email, data.password)
      //signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div class="container">
      <form class="loginContainer">
        <div class="usernameInput">
          <img src={IC_User} className="icon" alt="" />
          <input
            name="email"
            placeholder="EMAIL"
            class="input"
            type="text"
            onChange={(event) => handleInput(event)}
          ></input>
        </div>

        <div class="passwordInput">
          <img src={IC_Lock} className="icon" alt="" />
          <input
            name="password"
            placeholder="PASSWORD"
            class="input"
            type="password"
            onChange={(event) => handleInput(event)}
          ></input>
        </div>

        <div class="passwordInput">
          <img src={IC_Lock} className="icon" alt="" />
          <input
            name="confirmPassword"
            placeholder="CONFIRM PASSWORD"
            class="input"
            type="password"
            onChange={(event) => handleInput(event)}
          ></input>
        </div>

        <a class="button" href="/home" onClick={handleSubmit}>
          Sign Up
        </a>
      </form>
      <Routes>
        <Route path="/home" element={<HomeScreen />}></Route>
      </Routes>
      {/* <div class="autoLoginContainer">
                <a class="optionButton" href="javascript:void(0);" onClick={handleGoogleSubmit}>Sign in with Google</a>
            </div> */}
    </div>
  );
}
