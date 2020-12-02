import React from "react";
import StarDecoration from "../components/StarDecoration";
import "./Pages.scss";

function Home() {
  return (
    <main className="home">
      <StarDecoration />
      <h1 className="home-title">The Hall of Greats</h1>
      <section className="description-container">
        <p>
          The Easy Allies have been conducting their own video game Hall of Fame
          they like to call The Hall of Greats! The inagural ceremony happened
          in February of 2017. Ever since, every three to four months, the Allies
          gather to decide the two best games of each ceremony to induct into
          the Hall of Greats!{" "}
        </p>
        <p>
          Currently there are 26 games inducted into this illustrious hall,
          which you can find{" "}
          <a href="/winners" className="home-links">
            here
          </a>
          . The allies who have the most games inducted are:{" "}
          <a href="allies/michael_damiani" className="home-links">
            Michael Damiani
          </a>{" "}
          &amp;{" "}
          <a href="allies/brad_ellis" className="home-links">
            Brad Ellis
          </a>
          , each inducting five games. The ally who sadly has the most games
          banned is:{" "}
          <a href="allies/don_casanova" className="home-links">
            Don Casanova
          </a>
          , where he had three straight games be banned starting with the second
          Hall of Greats. There have been three situations when a Patreon Vote
          was required to induct a game into the Hall of Greats,{" "}
          <a href="ceremonies/hall_great_one" className="home-links">
            The First Hall of Greats
          </a>
          ,{" "}
          <a href="ceremonies/hall_great_eight" className="home-links">
            The Eighth Hall of Greats
          </a>
          , and the most impressive feat being when Patreon decided both games
          to get inducted when there was a three-way tie,{" "}
          <a href="ceremonies/hall_great_ten" className="home-links">
            The Tenth Hall of Greats
          </a>
          .{" "}
        </p>
      </section>
      <h2 className="rules-heading">The Rules</h2>
      <section className="rules-list">
        <li>Starting with the eighth Hall of Greats, alliances were banned.</li>
        <li>
          Starting with the fifth Hall of Greats, a person cannot vote for their
          own game that they have nominated.
        </li>
        <li>
          Starting with the second Hall of Greats, games that received no votes
          from other Allies are banned for one year.{" "}
        </li>
        <li>
          If the second and third games are tied, the Patreon Easy Allies
          community will choose the game between the tied games to be inducted.{" "}
        </li>
        <li>
          Each Ally has six votes. Their first choice for induction will receive
          three points, the second choice will receive two points, and their
          last choice will receive one.
        </li>
      </section>
      <h2 className="bans-heading">The Current Bans</h2>
      <section className="banned-list">
        <li>Huntdown (Until Q2 2021)</li>
      </section>
      <StarDecoration />
    </main>
  );
}

export default Home;
