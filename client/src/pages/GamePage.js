import React, { useState, useEffect } from 'react';
import gamesAPI from '../utils/gamesAPI';
import { Typography } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";

function GamePage(props) {
  const [gamePage, setGamePage] = useState();
  const { match, history } = props;
  const { params } = match;
  const { _id } = params;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGame();
      console.log("DATA", data);
      setGamePage({data});
    }

    fetchData();
  }, []);

  let gameToRender;
  if (gamePage) {
    gameToRender = gamePage.map((game) => {
      return (
        <Container fluid key={game._id}>
          <Row>
            <Col lg={6} className="allyAndGame">
              <h3>{game.game} |</h3>
              <h4 style={{ marginLeft: "1em" }}>Brought By: {game.ally}</h4>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginTop: "-2em " }}>
              <p style={{ marginLeft: "1em" }}>
                {" "}
                <span style={{ textDecoration: "underline" }}>
                  Platforms
                </span>: {game.platforms} |{" "}
                <span style={{ textDecoration: "underline" }}>Genre</span>:{" "}
                {game.genre} | {" "}
                <span style={{textDecoration: 'underline'}}>Metacritic</span>:{" "}
                {game.metacritic} | {" "}
                <span style={{textDecoration: 'underline'}}>Year</span>:{" "}
                {game.year} | {" "}
                <span style={{textDecoration: 'underline'}}>Votes Received</span>:{" "}
                {game.votes}
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={12} style={{ margin: "0 1em 0 1em" }}>
              <p>{game.description}</p>
            </Col>
          </Row>
        </Container>
      );
    });
  }

  return  (
    <div>
      {gameToRender}
    </div>
  )
};

export default GamePage;