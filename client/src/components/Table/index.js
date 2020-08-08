import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import gamesAPI from "../../utils/gamesAPI";

function TableNominees() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log("DATA", data);
      setGames(data);
    }

    fetchData();
  }, []);

  let nomineesToRender;
  if (games) {
    nomineesToRender = games.map((nominee) => {
      return (
        <tbody>
          <tr>
            <td>{nominee.hallOfGreat}</td>
            <td>{nominee.ally}</td>
            <td>{nominee.game}</td>
            <td style={{ marginLeft: "10em" }}>{nominee.votes}</td>
            <td>{nominee.victory}</td>
            <td>{nominee.banned}</td>
            <td>{nominee.wonByPatreonVote}</td>
          </tr>
        </tbody>
      );
    });
  }

  return (
    <div style={{placeItems: 'center'}}>
      <Table variant="dark">
        <thead>
          <tr>
            <th>Ceremony</th>
            <th>Nominated By</th>
            <th>Game</th>
            <th>Votes Received</th>
            {/* <th>Victorius?</th>
      <th>Banned?</th>
      <th>Patreon Vote?</th> */}
          </tr>
        </thead>
        {nomineesToRender}
      </Table>
    </div>
  );
}

export default TableNominees;
