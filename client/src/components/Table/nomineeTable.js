import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./Table.scss";

function NomineeTable({ history, games }) {
  const [sortConfig, setSortConfig] = useState(null);

  // Returns a copy of games.
  let gameList = [...games];

  // Sorts table
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

  // Returns sorted data ascending or descending
  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Puts data in a table sorted at first by Ceremony
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
              className='table-infoR'
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
              className='table-infoE'
              style={{
                padding: ".5em",
              }}
            >
              {sorted.genre}
            </td>
            <td
              className='table-infoE'
              style={{
                padding: ".5em",
              }}
            >
              {sorted.developer}
            </td>
            <td
              className='table-infoE'
              style={{
                padding: ".5em",
              }}
            >
              {sorted.year}
            </td>
            <td
              className='table-infoE'
              style={{
                padding: ".5em",
              }}
            >
              {sorted.metacritic}
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
    <section className='nominee-table'>
      <table>
        <thead>
          <tr>
            <th style={{width: '15%'}}>
              Ceremony
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("hallOfGreat")}
              ></FontAwesomeIcon>
            </th>
            <th style={{width: '25%'}}>
              Nominated By
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("ally")}
              ></FontAwesomeIcon>
            </th>
            <th style={{width: '45%'}}>
              Game
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("game")}
              ></FontAwesomeIcon>
            </th>
            <th>
              Genre
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("genre")}
              ></FontAwesomeIcon>
            </th>
            <th>
              Developer
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("developer")}
              ></FontAwesomeIcon>
            </th>
            <th style={{width: '20%'}}>
              Year
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("year")}
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
            <th>
              Inducted
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("victory")}
              ></FontAwesomeIcon>
            </th>
            <th>
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
    </section>
  );
};

export default NomineeTable;