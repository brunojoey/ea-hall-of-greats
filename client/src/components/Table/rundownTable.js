import React from "react";
import "./styles.css";

function RundownTable(props) {
  const { history, games } = props;

  // Puts data in a table sorted at first by Ceremony
  let newSortedItems;
  if (games) {
    newSortedItems = games.map((sorted) => {
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
            </th>
            <th style={{ borderBottom: "1px solid black" }}>
              What They Voted For (Votes at the Time)
            </th>
          </tr>
        </thead>
        {newSortedItems}
      </table>
    </div>
  );
}

export default RundownTable;
