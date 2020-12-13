import React from "react";
import StarDecoration from "../components/StarDecoration";
import "./Pages.scss";

function Home() {
  return (
    <main className="home">
      <StarDecoration />
      <h1 className="home-title">Welcome to The Hall of Greats</h1>
      <ul className='home-links-div'>
        <li><a href='/about' className='home-links'>About</a></li>
        <li><a href='/winners' className='home-links'>Winners</a></li>
        <li><a href='/nominations' className='home-links'>Nominations</a></li>
        <li><a href='/ceremonies' className='home-links'>Ceremonies</a></li>
        <li><a href='/allies' className='home-links'>Allies</a></li>
      </ul>
      <StarDecoration />
    </main>
  );
}

export default Home;
