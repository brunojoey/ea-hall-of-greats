import React, { useState, useEffect } from "react";
import NomineeTable from "../components/Table/nomineeTable";
import StarDecoration from "../components/StarDecoration";
import gamesAPI from "../utils/gamesAPI";
import "./Pages.scss";

function Nominations(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  // Retrieves Database
  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className="nominations-page">
      <StarDecoration />
      <h2 className="nominations-page-heading">The Notorious Nominees</h2>
      <NomineeTable games={games} history={history} />
      <StarDecoration />
    </main>
  );
}

export default Nominations;
