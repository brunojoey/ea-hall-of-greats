import React, { useState, useEffect } from "react";
import gamesAPI from "../utils/gamesAPI";
import StarDecoration from '../components/StarDecoration';
import Loader from 'react-loader-spinner';
import { Grid } from "@material-ui/core";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./Pages.css";

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
    {(gamePage.game)
    ?
    <Container fluid key={gamePage.id}>
      {gamePage.victory === "True" ? (
        <>
          <Row className="starAndGame" style={{ textAlign: "center", marginTop: '-2em' }}>
            <StarDecoration />
            <h1 className="gameTitle" style={{marginBottom: '.25em'}}> {gamePage.game} </h1>
            <Image src={gamePage.image} alt={gamePage.alt} style={{border: '4px solid red'}} className='gameImage'/>
          </Row>
        </>
      ) : (
        <div style={{textAlign: 'center'}}>
        <h1
        className="gameTitle"
        style={{ margin: "0 auto", marginTop: ".3em", marginBottom: '.25em', textAlign: "center" }}
        >
          {gamePage.game}
        </h1>
        <Image src={gamePage.image} alt={gamePage.alt} style={{border: '4px solid red'}} />
        </div>
      )}
      <Row>
        <Col>
          <h3 style={{ marginLeft: "1em" }}>
            Brought By:{" "}
            <span onClick={() => history.push(`/allies/${gamePage.allyLink}`)} className='gameLink'>
              {gamePage.ally}
            </span>{" "}
          </h3>
          <p style={{ marginLeft: "1em" }}>
            {" "}
            <span style={{ textDecoration: "underline" }}>Ceremony</span>:{" "}
            <span
              onClick={() => history.push(`/ceremonies/${gamePage.hallLink}`)}
              className="gameLink"
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
            <span style={{ textDecoration: "underline" }}>Votes Received</span>:{" "}
            {gamePage.votes}
          </p>
        </Col>
      </Row>
      {gamePage.victory === "True"}
      <Row>
        <h4 style={{ marginLeft: "1em", marginBottom: '-.1em' }}>Description: </h4>
        <p style={{ margin: "0 1em 1em 1em" }}>{gamePage.description}</p>
      </Row>
      <Grid item xs={12} style={{ marginTop: "-3em", marginBottom: '4em' }}>
          <StarDecoration />
        </Grid>
    </Container>
    :
    <Loader className='loader' type='Circles' color='#FF0000' height={128} width={128} timeout={3000}/>
    }
    </>
  );
}

export default GamePage;
