import React, { useState, useEffect } from "react";
import "./styles.css";
import { IC_User, IC_Lock } from "../../assets/icons";
import SnackBar from "react-material-snackbar";
import ReactSnackBar from "react-js-snackbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import HomeScreen from "../home";

export default function SignUp() {
  let auth = getAuth();
  const initialValues = { email: "", password: "", confirmPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else if (values.password !== values.confirmPassword) {
      errors.password = "Password doesn't match";
    }
    return errors;
  };
  // const [data, setData] = useState({});
  // const handleInput = (event) => {
  //     let newInput = { [event.target.name]: event.target.value };
  //     setData({ ...data, ...newInput });
  // };
  // const handleSubmit = () => {
  //     //createUserWithEmailAndPassword(auth, data.email, data.password)
  //     if (data.password.Length < 6) {
  //         // snackbar = Snackbar.make(activity_criar_conta, "Your password must have at least 6 characters.", Snackbar.LENGTH_SHORT);
  //         // snackbar.show();
  //         alert("Your password must have at least 6 characters.");
  //         return;

  //     }
  //     const pass2 = data.confirmPassword.getText().toString();
  //     if (!data.password.equals(pass2)) {
  //         alert("Passwords ummatched, confirmation failed.")
  //         return;
  //         // return (
  //         //     <SnackBar open={true} show={true} timer={3000}>
  //         //         <p>Passwords ummatched, confirmation failed.</p>
  //         //     </SnackBar>
  //         // )
  //     }

  //     createUserWithEmailAndPassword(auth, data.email, data.password)

  //         //signInWithEmailAndPassword(auth, data.email, data.password)
  //         .then((response) => {
  //             console.log(response.user)
  //         })
  //         .catch((err) => {
  //             alert(err.message)
  //         })
  // }
  return (
    <div class="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        (createUserWithEmailAndPassword(
          auth,
          formValues.email,
          formValues.password
        ),
        (<div className="ui message success">Signed in successfully</div>))
      ) : (
        <p>Xin vui lòng đăng ký</p>
      )}

      <form class="loginContainer" onSubmit={handleSubmit}>
        <div class="usernameInput">
          <img src={IC_User} className="icon" alt="" />
          <input
            name="email"
            placeholder="EMAIL"
            class="input"
            type="text"
            value={formValues.email}
            onChange={handleChange}
          ></input>
        </div>
        <p>{formErrors.email}</p>
        <div class="passwordInput">
          <img src={IC_Lock} className="icon" alt="" />
          <input
            name="password"
            placeholder="PASSWORD"
            class="input"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          ></input>
        </div>
        <p>{formErrors.password}</p>
        <div class="passwordInput">
          <img src={IC_Lock} className="icon" alt="" />
          <input
            name="confirmPassword"
            placeholder="CONFIRM PASSWORD"
            class="input"
            type="password"
            value={formValues.confirmPassword}
            onChange={handleChange}
          ></input>
        </div>

        <a class="button" href="/tree" onClick={handleSubmit}>
          Sign Up
        </a>
      </form>
      <Routes>
        <Route path="/tree" element={HomeScreen}></Route>
      </Routes>
      {/* <div class="autoLoginContainer">
                <a class="optionButton" href="javascript:void(0);" onClick={handleGoogleSubmit}>Sign in with Google</a>
            </div> */}
    </div>
  );
}
