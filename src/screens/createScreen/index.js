import Person from "../../components/Person/Person";
import "./styles.css";
import { useState } from "react";
import { IC_Person } from "../../assets/icons";
import Navigation from "../../routes/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "../home";

function CreateScreen() {
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [age, setAge] = useState(0);
  const [image, setImage] = useState(IC_Person);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangRelationship = (event) => {
    setRelationship(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleSubmit = (event) => {};
  return (
    <div className="container">
      <Navigation />
      <div className="Person-container">
        <Person
          name={name}
          relationship={relationship}
          image={image}
          age={age}
        />
      </div>
      <form class="input-section">
        <label>Name: </label>
        <input
          className="input-name"
          type="text"
          placeholder="Person's Name"
          onChange={(event) => handleChangeName(event)}
        />
        <br />
        <label>Age: </label>
        <input
          className="input-age"
          type="text"
          placeholder="Person's Name"
          onChange={(event) => handleChangeAge(event)}
        />
        <br />
        <label>Relationship</label>
        <input
          className="input-relationship"
          type="text"
          placeholder="Person's Relationship"
          onChange={(event) => handleChangRelationship(event)}
        />
      </form>
      <div className="submit-button">
        <button onClick={(event) => handleSubmit(event)}>
          <a href="/">Submit</a>
        </button>
      </div>
      <Routes>
        <Route path="/" element={HomeScreen}></Route>
      </Routes>
    </div>
  );
}
export default CreateScreen;
