import React from "react";
import StarDecoration from "../components/StarDecoration";
import "./Pages.scss";
import useMediaQuery from "../utils/useMediaQuery";

function Home() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <main className="home">
      <StarDecoration />
      <h1 className="home-title">Welcome to The Hall of Greats</h1>
      {matches ? (
        <ul className="home-links-div">
          <li>
            <a href="/about" className="home-links">
              About
            </a>
          </li>
          <li>
            <a href="/winners" className="home-links">
              Winners
            </a>
          </li>
          <li>
            <a href="/nominations" className="home-links">
              Nominations
            </a>
          </li>
          <li>
            <a href="/ceremonies" className="home-links">
              Ceremonies
            </a>
          </li>
          <li>
            <a href="/allies" className="home-links">
              Allies
            </a>
          </li>
        </ul>
      ) : (
        <ul className="home-links-div-two">
          <li className="home-links-two">
            <a href="/about" className="home-links-two">
              About
            </a>
          </li>
          <li className="home-links-two">
            <a href="/winners" className="home-links-two">
              Winners
            </a>
          </li>
          <li className="home-links-two">
            <a href="/nominations" className="home-links-two">
              Nominations
            </a>
          </li>
          <li className="home-links-two">
            <a href="/ceremonies" className="home-links-two">
              Ceremonies
            </a>
          </li>
          <li className="home-links-two">
            <a href="/allies" className="home-links-two">
              Allies
            </a>
          </li>
        </ul>
      )}
      <StarDecoration />
    </main>
  );
}

export default Home;
