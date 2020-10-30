import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function RundownTable(props) {
  const { history, games } = props;
  const [sortConfig, setSortConfig] = useState(null);

  // Sorts the Table
  let sortedItems = [...games];

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
  let newSortedItems;
  if (games) {
    newSortedItems = sortedItems.map((sorted) => {
      return (
        <tbody key={sorted._id}>
          <tr>
            <td
              className="tableInfoE"
              style={{
                padding: "1em",
                borderBottom: "1px solid black",
              }}
            >
              <span
                onClick={() => history.push(`/allies/${sorted.allyLink}`)}
                className="gameLink"
              >
                {sorted.ally}
              </span>
            </td>
            <td
              className="tableInfoR"
              style={{
                borderBottom: "1px solid black",
                borderLeft: "1px solid black",
                padding: ".5em",
              }}
            >
                {sorted.votingRundown}
            </td>
          </tr>
        </tbody>
      );
    });
  };

  return (
    <div>
      <table style={{ margin: "0 auto" }} className="table-sortable">
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid black" }}>
              Ally
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("hallOfGreat")}
              ></FontAwesomeIcon>
            </th>
            <th style={{ borderBottom: "1px solid black" }}>
              What They Voted For (Votes at the Time)
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => requestSort("vote")}
              ></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
        {newSortedItems}
      </table>
    </div>
  );
}

export default RundownTable;
