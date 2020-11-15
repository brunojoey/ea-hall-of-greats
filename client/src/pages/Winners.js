import React, { useState, useEffect } from "react";
import gamesAPI from "../utils/gamesAPI";
import WinnerTable from "../components/Table/winnerTable";
import StarDecoration from '../components/StarDecoration';
import "./Pages.css";

function Winners(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.victory === "True");
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <StarDecoration />
      <h2 className='winner-heading'>The Illustrious Inductees</h2>
      <WinnerTable games={games} history={history} />
      <StarDecoration />
    </div>
  );
}

export default Winners;
