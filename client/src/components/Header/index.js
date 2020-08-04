import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function Header() {
  return (
    <div className='hallOfGreatsHeader' style={{ backgroundColor: "black" }}>
      <h1
        style={{
          padding: "1em 0 1em .5em",
          margin: "0",
          alignContent: 'left'
        }}
      >
        <strong style={{ color: "white" }}>EASY</strong>
        <strong style={{ color: "red" }}> ALLIES</strong>
      </h1>
      
      <Link to="/">Home</Link>
      <Link to="/winners">The Inductees</Link>
      <Link to="/nominations">The Nominations</Link>
      <Link to="/allies">The Allies</Link>
    </div>
  );
}

export default Header;
