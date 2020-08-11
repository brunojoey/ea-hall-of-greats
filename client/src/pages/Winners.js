import React, { useEffect, useState } from "react";
import gamesAPI from "../utils/gamesAPI";
import { Typography } from "@material-ui/core";
import { Image, Container, Row, Col } from "react-bootstrap";
import buildRoutes from "../utils/buildRoutes";
import imageJson from "../utils/images.json";
import "./style.css";

function Winners() {
  const [gameState, setGameState] = useState([]);

  // function renderImages({ image, alt }) {
  //   imageJson.map((images) => {
  //     <Image src={buildRoutes(imageJson.image)} alt={imageJson.alt} />
  //   })
  // };

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log("DATA", data);
      data = data.filter((games) => games.victory === 'True');
      console.log("NEW DATA", data);
      setGameState(data);
    }

    fetchData();
  }, []);

  let gamesToRender;
  if (gameState) {
    gamesToRender = gameState.map((gameHOG) => {
      return (
        <Container fluid key={gameHOG._id}>
          <Row>
            <Col lg={6} className="allyAndGame">
              <h3>{gameHOG.game} |</h3>
              <h4 style={{ marginLeft: "1em" }}>Brought By: {gameHOG.ally}</h4>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginTop: "-2em " }}>
              <p style={{ marginLeft: "1em" }}>
                {" "}
                <span style={{ textDecoration: "underline" }}>
                  Platforms
                </span>: {gameHOG.platforms} |{" "}
                <span style={{ textDecoration: "underline" }}>Genre</span>:{" "}
                {gameHOG.genre} | {" "}
                <span style={{textDecoration: 'underline'}}>Metacritic</span>:{" "}
                {gameHOG.metacritic} | {" "}
                <span style={{textDecoration: 'underline'}}>Year</span>:{" "}
                {gameHOG.year} | {" "}
                <span style={{textDecoration: 'underline'}}>Votes Received</span>:{" "}
                {gameHOG.votes}
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={12} style={{ margin: "0 1em 0 1em" }}>
              <p>{gameHOG.description}</p>
            </Col>
          </Row>
        </Container>
      );
    });
  }

  return (
    <>
    <div>
      <Typography
        variant="h2"
        style={{ marginTop: ".5em", textAlign: "center" }}
      >
        The Illustrious Inductees
      </Typography>
      {gamesToRender}
    </div>
    </>
  );
}

export default Winners;
