import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gamesAPI from "../utils/gamesAPI";
import StarDecoration from "../components/StarDecoration";
import Loader from "react-loader-spinner";
import { Button } from "@material-ui/core";
import "./Pages.scss";

function GamePage({ match, history }) {
  const [gamePage, setGamePage] = useState([]);
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGame(id);
      setGamePage(data);
    }

    fetchData();
  }, [id, setGamePage]);

  return (
    <>
      {gamePage.game ? (
        <main key={gamePage.id} className="game-page">
          {gamePage.victory === "True" ? (
            <section className="inductee-area">
              <StarDecoration />
              <h1 className="game-title-primary"> {gamePage.game} </h1>
              <span className="game-images">
                <img
                  src={gamePage.image}
                  alt={gamePage.alt}
                  style={{ border: "4px solid red" }}
                  className="game-image-primary"
                />
                { gamePage.imageTwo ? 
                <img
                  src={gamePage.imageTwo}
                  alt={gamePage.alt}
                  style={{ border: "4px solid red" }}
                  className="game-image-primary"
                /> : <></>}
              </span>
              <h2 className="game-ceremony">
                Hall of Greats {gamePage.hallOfGreat} Winner
              </h2>
            </section>
          ) : (
            <section className="nominee-area">
              <h1 className="game-title-secondary"> {gamePage.game} </h1>
              <img
                src={gamePage.image}
                alt={gamePage.alt}
                className="game-image-secondary"
                style={{ border: "4px solid red" }}
              />
              <h2 className="game-ceremony">
                Hall of Greats {gamePage.hallOfGreat} Nominee
              </h2>
            </section>
          )}
          <section className="game-info">
            <span className="ally-game">
              <h3 className="brought-by">Brought By:</h3>{" "}
              <p
                onClick={() => history.push(`/allies/${gamePage.allyLink}`)}
                className="ally-page-link"
              >
                {gamePage.ally}
              </p>{" "}
            </span>
            <p className="game-data-section">
              {" "}
              <strong>Ceremony</strong>:{" "}
              <span
                onClick={() => history.push(`/ceremonies/${gamePage.hallLink}`)}
                className="hall-page-link"
              >
                Hall of Great {gamePage.hallOfGreat}{" "}
              </span>
              | <strong>Platforms</strong>: {gamePage.platforms} |{" "}
              <strong>Genre</strong>: {gamePage.genre} |{" "}
              <strong>Developer</strong>: {gamePage.developer} |{" "}
              <strong>Publisher</strong>: {gamePage.publisher} |{" "}
              <strong>Metacritic</strong>: {gamePage.metacritic} |{" "}
              <strong>Year</strong>: {gamePage.year} |{" "}
              <strong>Votes Received</strong>: {gamePage.votes} |{" "}
              {gamePage.wonByPatreonVote ? (
                <strong>Won By Patreon Vote | </strong>
              ) : null}
              {gamePage.runoffVotes ? (
              <div>
                <strong>Runoff Votes </strong>: <p>{gamePage.runoffVotes}</p>
              </div>
              ) : <></>} |{" "}
              <strong>Banned</strong>: {gamePage.banned}
            </p>
          </section>
          {gamePage.victory === "True"}
          <section className="description-game-section">
            <span>
              {" "}
              <strong>Description: </strong>{" "}
              <p className="description-game">{gamePage.description}</p>{" "}
              <Button className="description-game-button">
                <a
                  href={gamePage.infoLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  More Information
                </a>
              </Button>
              <Button className="description-game-button" style={{marginLeft: "3rem"}}>
                <Link
                  to='/'
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Go Home
                </Link>
              </Button>
            </span>
          </section>
          <StarDecoration />
        </main>
      ) : (
        <>
          <Loader
            className="loader"
            type="Circles"
            color="red"
            height={128}
            width={128}
            timeout={3000}
            style={{ marginLeft: "40rem", marginTop: "5rem" }}
          />
          <h2 style={{ textAlign: "center" }}>Please Wait</h2>
        </>
      )}
    </>
  );
}

export default GamePage;
