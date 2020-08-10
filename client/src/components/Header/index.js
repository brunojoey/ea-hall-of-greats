import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import './style.css'

function Header() {
  return (
    <>
    <div className='hallOfGreatsHeader' style={{ backgroundColor: "black" }}>
      <h1
        style={{
          margin: ".25em",
          alignContent: 'left'
        }}
      >
        <strong style={{ color: "white" }}>EASY</strong>
        <strong style={{ color: "red" }}>ALLIES</strong>
      </h1>
      <div className='nav-links-div'>
        <Row>
          <Link to="/" className='nav-links'>Home</Link>
          <Link to="/winners" className='nav-links'>The Inductees</Link>
          <Link to="/nominations" className='nav-links'>The Nominations</Link>
          <Link to="/ceremonies" className='nav-links'>The Ceremonies</Link>
          <Link to="/allies" className='nav-links'>The Allies</Link>
        </Row>
      </div>
    </div>
      </>
  );
}

export default Header;
