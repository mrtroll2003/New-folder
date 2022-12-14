import logo from "./logo.svg";
import "./App.css";
import Login from "./screens/loginScreen/index";
import SignUp from "./screens/signUpScreen/index";
import CreateScreen from "./screens/createScreen";
import Navigation from "./routes/Navigation/Nav";
import HomeScreen from "./screens/home";
//React Router Methods
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtOa6EZPh4a91fiUfdY9C08LzQzjnVfYA",
  authDomain: "family-tree-cd89a.firebaseapp.com",
  projectId: "family-tree-cd89a",
  storageBucket: "family-tree-cd89a.appspot.com",
  messagingSenderId: "144860506030",
  appId: "1:144860506030:web:44242ae385cfd610ff4a3f",
  measurementId: "G-MMD7KH7R9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  //Test screens here
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tree" element={<HomeScreen />} />
        <Route path="/create" element={<CreateScreen />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
