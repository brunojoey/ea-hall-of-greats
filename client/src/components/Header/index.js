import React from "react";
import { Link } from "react-router-dom";
import MenuNav from '../MenuNav';
import './style.css'

function Header() {
  return (
    <>
    <div className='hallOfGreatsHeader' style={{ backgroundColor: "black" }}>
      <h1
        style={{
          // padding: "1em 0 1em .5em",
          margin: ".25em",
          alignContent: 'left'
        }}
      >
        <strong style={{ color: "white" }}>EASY</strong>
        <strong style={{ color: "red" }}>ALLIES</strong>
      </h1>
      {/* <MenuNav /> */}
      <div className='nav-links-div'>
        <Link to="/" className='nav-links'>Home</Link>
        <Link to="/winners" className='nav-links'>The Inductees</Link>
        <Link to="/nominations" className='nav-links'>The Nominations</Link>
        <Link to="/allies" className='nav-links'>The Allies</Link>
      </div>
    </div>
      </>
  );
}

export default Header;
