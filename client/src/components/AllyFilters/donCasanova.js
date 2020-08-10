import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import gamesAPI from "../../utils/gamesAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function DonCasanova() {
  const [ally, setAlly] = useState([]);

  // function renderImages({ image, alt }) {
  //   imageJson.map((images) => {
  //     <Image src={buildRoutes(imageJson.image)} alt={imageJson.alt} />
  //   })
  // };

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log("DATA", data);
      data = data.filter((games) => games.ally === 'Don Casanova');
      console.log("NEW DATA", data);
      setAlly(data);
    }

    fetchData();
  }, []);

  let allyToRender;
  if (ally) {
    allyToRender = ally.map((ally) => {
      return (
        <tbody key={ally._id}>
          <tr>
          <td
              style={{
                textAlign: "center",
                padding: "1em",
                borderBottom: "1px solid black",
              }}
            >
              {ally.hallOfGreat}
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {ally.game}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
              }}
            >
              {ally.votes}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {ally.victory}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {ally.banned}
            </td>
          </tr>
        </tbody>
      );
    });
  }

  return (
    <div>
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
                padding: "0 1em 1em 1em",
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
                padding: "0 1em 1em 1em",
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
        {allyToRender}
      </Table>
    </div>
  );
}

export default DonCasanova;
