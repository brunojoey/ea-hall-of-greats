import { useState } from "react";
import StarDecoration from '../StarDecoration';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import './Table.scss';

function AllyTable({ history, games }) {
  const [sortConfig, setSortConfig] = useState(null);

  // Gets the Games
  let gameList = [...games];

  // Sorts the games
  if (sortConfig !== null) {
    gameList.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  };

  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };


  let sortedItems;
  if (games) {
    sortedItems = gameList.map((sorted) => {
      return (
        <tbody key={sorted._id}>
          <tr>
            <td
              className='table-infoE'
              style={{
                padding: "1em",
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
              className='table-infoR'
              style={{
                padding: ".5em"              
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
              className='table-infoE'
            >
              {sorted.votes}
            </td>
            <td
              className='table-infoE'
              style={{
                padding: ".5em",
              }}
            >
              {sorted.victory}
            </td>
            <td
              className='table-infoE'
              style={{
                padding: ".5em",
              }}
            >
              {sorted.banned}
            </td>
          </tr>
        </tbody>
      );
    });
  };

  return (
    <section className='ally-table'>
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
              Game
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("game")}
              ></FontAwesomeIcon>
            </th>
            <th
            >
              Votes Received
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("votes")}
              ></FontAwesomeIcon>
            </th>
            <th
            >
              Inducted
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("victory")}
              ></FontAwesomeIcon>
            </th>
            <th
            >
              Banned
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("banned")}
              ></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
        {sortedItems}
      </table>
      <StarDecoration />
    </section>
  );
};

export default AllyTable;