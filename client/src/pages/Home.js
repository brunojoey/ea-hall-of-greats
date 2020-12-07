import React from "react";
import StarDecoration from "../components/StarDecoration";
import "./Pages.scss";

function Home() {
  return (
    <main className="home">
      <StarDecoration />
      <h1 className="home-title">Welcome to The Hall of Greats</h1>
      <div className='home-links-div'>
        <a href='/about' className='home-links'>About</a>
        <a href='/winners' className='home-links'>Winners</a>
        <a href='/nominations' className='home-links'>Nominations</a>
        <a href='/ceremonies' className='home-links'>Ceremonies</a>
        <a href='/allies' className='home-links'>Allies</a>
      </div>
      <StarDecoration />
    </main>
  );
}

export default Home;
