import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function CeremonyTable(props) {
  const { history, games } = props;
  const [sortConfig, setSortConfig] = useState(null);

  // Sorts the Table
  let sortedItems = [...games];

  // if (sortConfig !== null) {
  //   sortedItems.sort((a, b) => {
  //     if (a[sortConfig] < b[sortConfig]) {
  //       return -1;
  //     }
  //     if (a[sortConfig] > b[sortConfig]) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // };

  if (sortConfig !== null) {
    let direction;
    sortedItems.sort((a, b) => {
      if (a[sortConfig] < b[sortConfig]) {
        return direction === "ascending" ? 1 : -1;
      }
      if (a[sortConfig] > b[sortConfig]) {
        return direction === "ascending" ? -1 : 1;
      }
      return 0;
    });
  }

  // const requestSort = (key) => {
  //   let direction = "ascending";
  //   if (sortConfig.key === key && sortConfig.direction === "ascending") {
  //     console.log('key', sortConfig.key);
  //     direction = "descending";
  //   }
  //   setSortConfig({ key, direction });
  // };

  let newSortedItems;
  if (games) {
    newSortedItems = sortedItems.map((sorted) => {
      return (
        <tbody key={sorted._id}>
          <tr>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              <span
                onClick={() => history.push(`/allies/${sorted.ally}`)}
                className="gameLink"
              >
                {sorted.ally}
              </span>
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              <span
                onClick={() => history.push(`/games/${sorted._id}`)}
                className="gameLink"
              >
                {sorted.game}
              </span>
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
              }}
            >
              {sorted.votes}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {sorted.victory}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {sorted.banned}
            </td>
          </tr>
        </tbody>
      );
    });
  }

  return (
    <div>
      <table style={{ margin: "0 auto" }} className="table-sortable">
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid black" }}>
              Nominated By
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => setSortConfig("ally")}
                // onClick={() => requestSort("ally")}
              ></FontAwesomeIcon>
            </th>
            <th style={{ borderBottom: "1px solid black" }}>
              Game
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => setSortConfig("game")}
                // onClick={() => requestSort("game")}
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
                onClick={() => setSortConfig("votes")}
                // onClick={() => requestSort("votes")}
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
                onClick={() => setSortConfig("victory")}
                // onClick={() => requestSort("victory")}
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
                onClick={() => setSortConfig("banned")}
                // onClick={() => requestSort("banned")}
              ></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
        {newSortedItems}
      </table>
    </div>
  );
};

export default CeremonyTable;
