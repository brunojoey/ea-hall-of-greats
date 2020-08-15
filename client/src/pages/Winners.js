import React, { useState, useEffect } from "react";
import gamesAPI from "../utils/gamesAPI";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Typography } from "@material-ui/core";
import "./Pages.css";

// function renderImages() {
//   imageJson.map((images) => {
//     return(
//       <Image src={buildRoutes(images.image)} alt={images.alt} />
//     )
//   })
// };

function Winners(props) {
  const [games, setGames] = useState([]);
  const [sortedField, setSortedField] = useState(null);
  const { history } = props;

  

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.victory === 'True');
      setGames(data);
    };

    fetchData();
  }, []);

  let winnersToRender;
  if (games) {
    winnersToRender = games.map((winner) => {
      return (
        <tbody key={winner._id}>
          <tr>
            <td
              style={{
                textAlign: "center",
                padding: "1em",
                borderBottom: "1px solid black",
              }}
            >
              {winner.hallOfGreat}
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              <span onClick={() => history.push(`/allies/${winner.ally}`)} className='gameLink'>{winner.ally}</span>
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              <span onClick={() => history.push(`/games/${winner._id}`)} className='gameLink'>{winner.game}</span>
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {winner.genre}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {winner.platforms}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {winner.metacritic}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
              }}
            >
              {winner.votes}
            </td>
          </tr>
        </tbody>
      );
    });
  }

  
  return (
    <div>
      <Typography
        variant="h2"
        style={{ margin: ".5em 0 .5em 0", textAlign: "center" }}
      >
        The Illustrious Inductees
      </Typography>
      <Table striped>
        <thead>
          <tr>
            <th
              style={{
                borderBottom: "1px solid black",
                padding: "0 1em 1em 1em",
              }}
            >
              Ceremony
              <FontAwesomeIcon
                size="1x"
                style={{marginLeft: '.25em'}}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => setSortedField()}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{ borderBottom: "1px solid black", paddingBottom: "1em" }}
            >
              Nominated By
              <FontAwesomeIcon
                size="1x"
                style={{marginLeft: '.25em'}}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{ borderBottom: "1px solid black", paddingBottom: "1em" }}
            >
              Game
              <FontAwesomeIcon
                size="1x"
                style={{marginLeft: '.25em'}}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
                padding: "0 1em 1em 1em",
              }}
            >
              Genre
              <FontAwesomeIcon
                size="1x"
                style={{marginLeft: '.25em'}}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
                padding: "0 1em 1em 1em",
              }}
            >
              Platforms
              <FontAwesomeIcon
                size="1x"
                style={{marginLeft: '.25em'}}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
                padding: "0 1em 1em 1em",
              }}
            >
              Metacritic
              <FontAwesomeIcon
                size="1x"
                style={{marginLeft: '.25em'}}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
                padding: "0 1em 1em 1em",
              }}
            >
              Votes Received
              <FontAwesomeIcon
                size="1x"
                style={{marginLeft: '.25em'}}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
        {winnersToRender}
      </Table>
    </div>
  );
};

export default Winners;
