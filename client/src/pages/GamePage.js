import React, { useState, useEffect } from "react";
import gamesAPI from "../utils/gamesAPI";
import imagesAPI from '../utils/imagesAPI';
import { Image, Container, Row, Col } from "react-bootstrap";

import placeholder from '../200.png';

function GamePage(props) {
  const [gamePage, setGamePage] = useState([]);
  const [gameImage, setGameImage] = useState([]);
  const { match, history } = props;
  const { params } = match;
  const { id } = params;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGame(id);
      setGamePage(data);
    };

    fetchData();
  }, [id]);
  
  useEffect(() => {
    async function fetchImage() {
        let { data } = await imagesAPI.getImages();
        console.log('IMAGES', data);
        console.log('IMAGE ALT', data[1].alt);
        // data = data.filter((gameImage) => (gameImage.alt === gamePage.game));
        console.log('Image', data[1].image);
        setGameImage(data[1].image);
      };
      fetchImage();
    
  }, []);

  return (
    <Container fluid key={gamePage.id}>
      <h1 className='gameTitle' style={{margin: '0 auto', marginTop: '.3em', textAlign: 'center'}}>{gamePage.game}</h1>
      <Row className="allyImageGame" style={{marginTop: '1em'}}> 
          <Image src={gameImage}></Image>
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
