import React, { useState, useEffect } from "react";
import gamesAPI from "../utils/gamesAPI";
import allyAPI from "../utils/allyAPI";
import { Image, Container, Row, Col } from "react-bootstrap";

import placeholder from '../200.png';

function GamePage(props) {
  const [gamePage, setGamePage] = useState([]);
  const { match, history } = props;
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGame(id);
      console.log("DATA", data);
      setGamePage(data);
    };

    fetchData();
  }, [id]);

  async function onClick() {
    if (gamePage) {
      let { data } = await allyAPI.getAlly(gamePage.ally); 
      console.log('data', data)   
    }
  };

  return (
    <Container fluid key={gamePage._id}>
      <h1 className='gameTitle' style={{margin: '0 auto', marginTop: '.3em', textAlign: 'center'}}>{gamePage.game}</h1>
      <Row className="allyImageGame" style={{marginTop: '1em'}}> 
          <Image src={gamePage.image} alt={gamePage.alt} />
      </Row>
      <Row>
        <Col>
          <h3 style={{marginLeft: '1em'}}>Brought By: <span onClick={() => history.push(`/allies/${gamePage.ally}`)}>{gamePage.ally}</span> </h3>
          <p style={{ marginLeft: "1em" }}>
            {" "}
            <span style={{ textDecoration: "underline" }}>Ceremony</span>:{" "}
            <span onClick={() => history.push(`/ceremonies/${gamePage.hallOfGreat}`)} className='gameLink'>Hall of Great {gamePage.hallOfGreat} </span>||{" "}
            <span style={{ textDecoration: "underline" }}>Platforms</span>:{" "}
            {gamePage.platforms} ||{" "} 
            <span style={{ textDecoration: "underline" }}>Genre</span>:{" "}
            {gamePage.genre} ||{" "}
            <span style={{ textDecoration: "underline" }}>Metacritic</span>:{" "}
            {gamePage.metacritic} ||{" "}
            <span style={{ textDecoration: "underline" }}>Year</span>:{" "}
            {gamePage.year} ||{" "}
            <span style={{ textDecoration: "underline" }}>Votes Received</span>:{" "}
            {gamePage.votes}
          </p>
        </Col>
      </Row>
      <Row>
          <h4 style={{marginLeft: '1em'}}>Description: </h4>
          <p style={{ margin: "0 1em 1em 1em" }}>{gamePage.description}</p>
      </Row>
    </Container>
  );
}

export default GamePage;
