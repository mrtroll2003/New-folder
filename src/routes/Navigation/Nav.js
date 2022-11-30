import React from "react";
import "./styles.css";
function Navigation() {
  return (
    <div class="topnav">
      <a class="active" href="/tree">
        Tree
      </a>
      <a href="/">Sign-Out</a>
      <a href="/create">Create</a>
      <a href="/texting">Texting</a>
    </div>
  );
}

export default Navigation;
