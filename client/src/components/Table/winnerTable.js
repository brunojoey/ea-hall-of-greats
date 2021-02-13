import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./Table.scss";

function WinnerTable({ history, games }) {
  const [sortConfig, setSortConfig] = useState(null);

  // Returns a copy of games.
  let gamelist = [...games];

  // Sorts table
  if (sortConfig !== null) {
    gamelist.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  };

  // Returns sorted data ascending or descending
  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Puts data in a table sorted at first by Ceremony
  let sortedItems;
  if (games) {
    sortedItems = gamelist.map((sorted) => {
      return (
        <tbody key={sorted._id}>
          <tr>
            <td
              className="table-infoE"
              style={{
                padding: "1em"
              }}
            >
              <span
                onClick={() => history.push(`/ceremonies/${sorted.hallLink}`)}
                className="hall-page-link"
              >
                {sorted.hallOfGreat}
              </span>
            </td>
            <td
              className="table-infoR"
              style={{
                padding: ".5em",
              }}
            >
              <span
                onClick={() => history.push(`/allies/${sorted.allyLink}`)}
                className="ally-page-link"
              >
                {sorted.ally}
              </span>
            </td>
            <td
              className="table-infoR"
              style={{
                padding: ".5em",
              }}
            >
              <span
                onClick={() => history.push(`/games/${sorted._id}`)}
                className="game-page-link"
              >
                {sorted.game}
              </span>
            </td>
            <td
              className="table-infoE"
              style={{
                padding: ".5em",
              }}
            >
              <span>{sorted.metacritic}</span>
            </td>
            <td
              className="table-infoE"
              style={{
                padding: ".5em",
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
    <section className="winner-table">
      <table>
        <thead>
          <tr>
            <th>
              Ceremony
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("hallOfGreat")}
              ></FontAwesomeIcon>
            </th>
            <th>
              Nominated By
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("ally")}
              ></FontAwesomeIcon>
            </th>
            <th>
              Game
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("game")}
              ></FontAwesomeIcon>
            </th>
            <th>
              Metacritic
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("metacritic")}
              ></FontAwesomeIcon>
            </th>
            <th>
              Votes Received
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("votes")}
              ></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
        {sortedItems}
      </table>
    </section>
  );
};

export default WinnerTable;