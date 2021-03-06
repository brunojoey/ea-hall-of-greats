import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./Table.scss";

function RundownTable({ games }) {
  const [sortConfig, setSortConfig] = useState(null);

  // Sorts the Table
  let gameList = [...games];

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
  }

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
    sortedItems = gameList.map((sorted) => {
      return (
        <tbody key={sorted._id}>
          <tr>
            <td>
              {" "}
              <span>{sorted.ally}</span>{" "}
            </td>
            {sorted.threePointVote === "Was Not Able to Attend" ? (
              <td>Was Not Able to Attend</td>
            ) : (
              <td className="table-infoR">{sorted.threePointVote}</td>
            )}
            <td className="table-infoR">{sorted.twoPointVote}</td>
            <td className="table-infoR">{sorted.onePointVote}</td>
          </tr>
        </tbody>
      );
    });
  }

  return (
    <section className="rundown-table">
      <table>
        <thead>
          <tr>
            <th>
              Ally
              <FontAwesomeIcon
                size="1x"
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("ally")}
              ></FontAwesomeIcon>
            </th>
            <th>Three Points Given</th>
            <th>Two Points Given</th>
            <th>One Point Given</th>
          </tr>
        </thead>
        {sortedItems}
      </table>
    </section>
  );
}

export default RundownTable;
