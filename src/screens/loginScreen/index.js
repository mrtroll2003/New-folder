import React, { useState } from "react";
import './styles.css';
import { IMG_Quarter1, IMG_Quarter2 } from '../../assets/images';
import { IC_User, IC_Lock } from "../../assets/icons";

import { app } from "../../firebaseConfig";

import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";
import { getRedirectResult } from "firebase/auth";


// const googleProvider = new GoogleAuthProvider();
// const auth = getAuth();
// signInWithRedirect(auth, provider);
// signOut(auth).then(() => {
//     // Sign-out successful.
// }).catch((error) => {
//     // An error happened.
// });

// getRedirectResult(auth)
//     .then((result) => {
//         // This gives you a Google Access Token. You can use it to access Google APIs.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;

//         // The signed-in user info.
//         const user = result.user;
//     }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//     });

export default function Login() {
    let auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [data, setData] = useState({});
    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value };
        setData({ ...data, ...newInput });
    };
    const handleSubmit = () => {
        //createUserWithEmailAndPassword(auth, data.email, data.password)
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((response) => {
                console.log(response.user)
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    const handleGoogleSubmit = () => {
        signInWithRedirect(auth, googleProvider)
            .then((response) => {
                console.log(response.user);
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    return (
        <div class="container">
            <img src={IMG_Quarter1} className="topRightDecor" alt="" />
            <img src={IMG_Quarter2} className="bottomLeftDecor" alt="" />
            <form class="loginContainer">
                <div class="usernameInput">
                    <img src={IC_User} className="icon" alt="" />
                    <input
                        name="email"
                        placeholder="EMAIL"
                        class="input"
                        type="text"
                        onChange={event => handleInput(event)}></input>
                </div>

                <div class="passwordInput">
                    <img src={IC_Lock} className="icon" alt="" />
                    <input
                        name="password"
                        placeholder="PASSWORD"
                        class="input"
                        type="password"
                        onChange={event => handleInput(event)}></input>
                </div>

                <a class="button" href="javascript:void(0);" onClick={handleSubmit}>Login</a>
                <a class="button" href="javascript:void(0);" >No account? Sign up now</a>
            </form>

            <div class="autoLoginContainer">
                <a class="optionButton" href="javascript:void(0);" onClick={handleGoogleSubmit}>Sign in with Google</a>
            </div>

        </div>
    );
}
