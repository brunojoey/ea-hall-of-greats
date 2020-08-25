import React, { useEffect, useState, useMemo } from "react";
import gamesAPI from "../../utils/gamesAPI";
// import useSortableData from "../../utils/useSortableData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function NomineeTable(props) {
  const { history } = props;
  const [games, setGames] = useState([]);
  const [sortConfig, setSortConfig] = useState(null);

  // Sorts the Table
  let sortedItems = [...games];
  console.log("sortItems", sortedItems);

  if (sortConfig !== null) {
    sortedItems.sort((a, b) => {
      if (a[sortConfig] < b[sortConfig]) {
        return -1;
      }
      if (a[sortConfig] > b[sortConfig]) {
        return 1;
      }
      return 0;
    });
  }

  let newSortedItems;
  if (sortConfig) {
    newSortedItems = sortedItems.map((sorted) => {
      return (
        <tbody key={sorted._id}>
          <tr>
            <td
              style={{
                textAlign: "center",
                padding: "1em",
                borderBottom: "1px solid black",
              }}
            >
              {sorted.hallOfGreat}
            </td>
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

    })
  }

  // const requestSort = (key) => {
  //   console.log("key", key);
  //   let direction = "ascending";
  //   if (sortConfig.key === key && sortConfig.direction === "ascending") {
  //     direction = "descending";
  //   }
  //   setSortConfig({ key, direction });
  // };

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      setGames(data);
    }

    fetchData();
  }, []);

  let nomineesToRender;
  if (games) {
    nomineesToRender = games.map((nominee) => {
      return (
        <tbody key={nominee._id}>
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
              <span
                onClick={() => history.push(`/allies/${nominee.ally}`)}
                className="gameLink"
              >
                {nominee.ally}
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
                onClick={() => history.push(`/games/${nominee._id}`)}
                className="gameLink"
              >
                {nominee.game}
              </span>
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
      <table style={{ margin: "0 auto" }} className="table-sortable">
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid black" }}>
              Ceremony
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={() => setSortConfig("hallOfGreat")}
              ></FontAwesomeIcon>
            </th>
            <th style={{ borderBottom: "1px solid black" }}>
              Nominated By
              <FontAwesomeIcon
                size="1x"
                style={{ marginLeft: ".25em" }}
                className="feed-user-icon"
                icon={faSort}
                onClick={(key) => setSortConfig("ally")}
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
              ></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
            {/* {sortConfig} ? {sortedItems} : {nomineesToRender} */}
            {newSortedItems}
            {/* {nomineesToRender} */}
      </table>
    </div>
  );
}

export default NomineeTable;
