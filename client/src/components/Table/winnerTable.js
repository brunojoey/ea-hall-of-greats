import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./Table.scss";

function WinnerTable(props) {
  const { history, games } = props;
  const [sortConfig, setSortConfig] = useState(null);

  // Returns a copy of games.
  let sortedItems = [...games];

  // Sorts table
  if (sortConfig !== null) {
    sortedItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      return 0;
    });
  };

  // Returns sorted data ascending or descending
  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Puts data in a table sorted at first by Ceremony
  let newSortedItems;
  if (games) {
    newSortedItems = sortedItems.map((sorted) => {
      return (
        <tbody key={sorted._id}>
          <tr>
            <td
              className='tableInfoE'
              style={{
                padding: "1em",
                borderBottom: "1px solid black",
                backgroundColor: 'light-grey'
              }}
            >
              <span
                onClick={() => history.push(`/ceremonies/${sorted.hallLink}`)}
                className="hall-link"
              >
                {sorted.hallOfGreat}
              </span>
            </td>
            <td
              className='tableInfoR'
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              <span
                onClick={() => history.push(`/allies/${sorted.allyLink}`)}
                className="ally-link"
              >
                {sorted.ally}
              </span>
            </td>
            <td
              className='tableInfoR'
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              <span
                onClick={() => history.push(`/games/${sorted._id}`)}
                className="game-link"
              >
                {sorted.game}
              </span>
            </td>
            <td
              className='tableInfoE'
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              <span>
                {sorted.metacritic}
              </span>
            </td>
            <td
              className='tableInfoE'
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: '.5em'
              }}
            >
              {sorted.votes}
            </td>
          </tr>
        </tbody>
      );
    });
  };

  return (
    <div className='winner-table'>
      <table className="table-sortable">
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid black" }}>
              Ceremony
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("hallOfGreat")}
              ></FontAwesomeIcon>
            </th>
            <th style={{ borderBottom: "1px solid black" }}>
              Nominated By
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("ally")}
              ></FontAwesomeIcon>
            </th>
            <th style={{ borderBottom: "1px solid black" }}>
              Game
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("game")}
              ></FontAwesomeIcon>
            </th>
            <th
              style={{
                borderBottom: "1px solid black",
              }}
            >
              Metacritic
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("metacritic")}
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
                onClick={() => requestSort("votes")}
              ></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
        {newSortedItems}
        </table>
    </div>
  );
};

export default WinnerTable;