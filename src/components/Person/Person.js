import React from "react";
import "./styles.css";
import { useState } from "react";
import { IC_Person } from "../../assets/icons";

function Person({ ...props }) {
  return (
    <div className="contain">
      <img
        className="image"
        src={IC_Person}
        alt="ErrorImage"
        onClick={() => {}}
      />
      {/* <input
        className="name"
        name="name"
        placeholder="Person's Name"
        type="text"
        onChange={(event) => handleInput(event)}
      /> */}
      <h5 className="name">Name: {props.name}</h5>
      {/* <input
        className="relationship"
        name="relationship"
        placeholder="Relationship"
        onChange={(event) => handleInput(event)}
      /> */}
      <h6 className="relationship">Relationship: {props.relationship}</h6>
    </div>
  );
}

export default Person;
