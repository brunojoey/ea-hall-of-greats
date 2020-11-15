import React, { useState, useEffect } from "react";
import gamesAPI from "../utils/gamesAPI";
import StarDecoration from "../components/StarDecoration";
import Loader from "react-loader-spinner";
import "./Pages.scss";

function GamePage(props) {
  const [gamePage, setGamePage] = useState([]);
  const { match, history } = props;
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGame(id);
      setGamePage(data);
    }

    fetchData();
  }, [id]);

  return (
    <>
      {gamePage.game ? (
        <main key={gamePage.id}>
          {gamePage.victory === "True" ? (
            <section className="inductee-area">
              <StarDecoration />
              <h1 className="game-title-primary"> {gamePage.game} </h1>
              <img
                src={gamePage.image}
                alt={gamePage.alt}
                style={{ border: "4px solid red" }}
                className="game-image-primary"
              />
            </section>
          ) : (
            <section className='nominee-area'>
              <h1 className="game-title-secondary"> {gamePage.game} </h1>
              <img
                src={gamePage.image}
                alt={gamePage.alt}
                className='game-image-secondary'
                style={{ border: "4px solid red" }}
              />
            </section>
          )}
          <section className="game-info">
            <span className='ally-game'>
              <h3 className='brought-by'>Brought By:</h3>{" "}
              <p
                onClick={() => history.push(`/allies/${gamePage.allyLink}`)}
                className="ally-link"
              >
                {gamePage.ally}
              </p>{" "}
            </span>
            <p className='game-data-section'>
              {" "}
              <span style={{ textDecoration: "underline" }}>
                Ceremony
              </span>:{" "}
              <span
                onClick={() => history.push(`/ceremonies/${gamePage.hallLink}`)}
                className="hall-link"
              >
                Hall of Great {gamePage.hallOfGreat}{" "}
              </span>
              || <span style={{ textDecoration: "underline" }}>Platforms</span>:{" "}
              {gamePage.platforms} ||{" "}
              <span style={{ textDecoration: "underline" }}>Genre</span>:{" "}
              {gamePage.genre} ||{" "}
              <span style={{ textDecoration: "underline" }}>Metacritic</span>:{" "}
              {gamePage.metacritic} ||{" "}
              <span style={{ textDecoration: "underline" }}>Year</span>:{" "}
              {gamePage.year} ||{" "}
              <span style={{ textDecoration: "underline" }}>
                Votes Received
              </span>
              : {gamePage.votes}
            </p>
          </section>
          {gamePage.victory === "True"}
          <section className="description-game-section">
            <span>
              {" "}
              <strong>Description: </strong> <p className='description-game'>{gamePage.description}</p>{" "}
            </span>
          </section>
          <StarDecoration />
        </main>
      ) : (
        <Loader
          className="loader"
          type="Circles"
          color="red"
          height={128}
          width={128}
          timeout={3000}
        />
      )}
    </>
  );
}

export default GamePage;
