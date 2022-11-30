import React from "react";
import "./styles.css";
function Navigation() {
  return (
    <div class="topnav">
      <a class="active" href="/home">
        Home
      </a>
      <a href="/">Sign-Out</a>
      <a href="/create">Create</a>
      <a href="/Tree">Tree</a>
    </div>
  );
}

export default Navigation;
