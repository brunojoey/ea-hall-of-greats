import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import gamesAPI from "../../utils/gamesAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function HallOfGreatOne() {
  const [games, setGames] = useState([]);

  // function renderImages({ image, alt }) {
  //   imageJson.map((images) => {
  //     <Image src={buildRoutes(imageJson.image)} alt={imageJson.alt} />
  //   })
  // };

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log("DATA", data);
      data = data.filter((games) => games.hallOfGreat === 7);
      console.log("NEW DATA", data);
      setGames(data);
    }

    fetchData();
  }, []);

  let hallOneToRender;
  if (games) {
    hallOneToRender = games.map((gamesHOG1) => {
      return (
        <tbody key={gamesHOG1._id}>
          <tr>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {gamesHOG1.ally}
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {gamesHOG1.game}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
              }}
            >
              {gamesHOG1.votes}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {gamesHOG1.victory}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {gamesHOG1.banned}
            </td>
          </tr>
        </tbody>
      );
    });
  }

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>The Seventh Hall of Greats</h2>
      <Table striped style={{margin: '0 auto'}}>
        <thead>
          <tr>
            <th
              style={{ borderBottom: "1px solid black" }}
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
              style={{ borderBottom: "1px solid black" }}
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
                padding: "0 1em 0 1em",
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
            <th
              style={{
                borderBottom: "1px solid black",
                padding: "0 1em 0 1em",
              }}
            >
              Inducted
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
                padding: "0 1em 0 1em",
              }}
            >
              Banned
              <FontAwesomeIcon
                size="1x"
                style={{marginLeft: '.25em'}}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>

            </th>
          </tr>
        </thead>
        {hallOneToRender}
      </Table>
    </div>
  );
}

export default HallOfGreatOne;
