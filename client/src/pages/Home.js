import React from "react";
import StarDecoration from "../components/StarDecoration";
import "./Pages.scss";

function Home() {
  return (
    <main className='home'>
      <StarDecoration />
      <h1 className="home-title">The Hall of Greats</h1>
      <section className="description-container">
        <p>
          The Easy Allies have been conducting their own Hall of Fame for video
          games they like to call 'THE HALL OF GREATS'! The inagural ceremony happened in February of 2017. Ever since, every
          three to four months the Allies gather to decide the two best games of
          each ceremony to induct into the Hall of Greats!
        </p>
      </section>
      <h2 className='rules-heading'>The Rules</h2>
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
      <h2 className='bans-heading'>The Current Bans</h2>
      <section className="banned-list" style={{ marginBottom: "1em" }}>
        <li>Huntdown (Until Q2 2021)</li>
      </section>
      <StarDecoration />
    </main>
  );
}

export default Home;
