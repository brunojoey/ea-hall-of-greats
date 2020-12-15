import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import './Table.scss';

function CeremonyTable(props) {
  const { history, games } = props;
  const [sortConfig, setSortConfig] = useState(null);

  // Sorts the Table
  let sortedItems = [...games];

  if (sortConfig !== null) {
    sortedItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  let newSortedItems;
  if (games) {
    newSortedItems = sortedItems.map((sorted) => {
      return (
        <tbody key={sorted._id}>
          <tr>
            <td
              className='table-infoR'
              style={{
                padding: ".5em"
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
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
              {sorted.victory}
            </td>
            {sorted.wonByPatreonVote === 'true' ? <td>{sorted.wonByPatreonVote}</td>: <></>}
            <td
            className='table-infoE'
              style={{
                padding: ".5em"
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
    <section className='ceremony-table'>
      <table>
        <thead>
          <tr>
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
        {newSortedItems}
      </table>
    </section>
  );
};

export default CeremonyTable;