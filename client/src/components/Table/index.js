import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import gamesAPI from "../../utils/gamesAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function TableNominees() {
  const [games, setGames] = useState([]);

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

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
        <tbody>
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
        {nomineesToRender}
      </Table>
    </div>
  );
}

export default TableNominees;
