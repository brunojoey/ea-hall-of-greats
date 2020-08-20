import React, { useEffect, useState } from "react";
import gamesAPI from "../../utils/gamesAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./style.css";


function NomineeTable(props) {
  const [games, setGames] = useState([]);
  // const [rows, setRows] = useState({nomineesToRender})
  const [onSort, setOnSort] = useState();

  // Sorts the Table
  async function sortOn(event, sortKey) {
    if (games) {
      let { data } = await gamesAPI.getGames();
      console.log('dataSort', data);
      data.sort((a, b) => (a.hallOfGreat, sortKey) > (b.hallOfGreat, sortKey));
      setOnSort({data});
    };
  };

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log("DATA", data);
      setGames(data);
    }

    fetchData();
  }, []);

  let nomineesToRender;
  if (games) {
    nomineesToRender = games.map((nominee) => {
      return (
        <tbody key={nominee._id}>
          <tr>
            <td
              style={{
                textAlign: "center",
                padding: "1em",
                borderBottom: "1px solid black",
              }}
            >
              {nominee.hallOfGreat}
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {nominee.ally}
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {nominee.game}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
              }}
            >
              {nominee.votes}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {nominee.victory}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {nominee.banned}
            </td>
          </tr>
        </tbody>
      );
    });
  }

  return (
    <div>
      <table striped style={{margin: '0 auto'}} className='table-sortable'>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid black" }}>
              Ceremony
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={(event) => sortOn(event, 'ceremonies')}
              ></FontAwesomeIcon>
            </th>
            <th style={{ borderBottom: "1px solid black" }}>
              Nominated By
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th style={{ borderBottom: "1px solid black" }}>
              Game
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
              }}
            >
              Votes Received
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
              }}
            >
              Inducted
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
              }}
            >
              Banned
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
              ></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
        {nomineesToRender}
      </table>
    </div>
  );
}

export default NomineeTable;
