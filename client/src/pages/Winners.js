import React, { useState, useEffect } from "react";
import gamesAPI from "../utils/gamesAPI";
import WinnerTable from "../components/Table/winnerTable";
import StarDecoration from '../components/StarDecoration';
import { Grid, Typography } from "@material-ui/core";
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
    <div style={{ marginBottom: '4em', marginTop: '-3em' }}>
      <StarDecoration style={{ margin: ".5em 0 .5em 0"}} />
      <Grid item xs={12}>
        <Typography
          variant="h2"
          style={{ margin: "1em 0 .5em 0", textAlign: "center" }}
        >
          The Illustrious Inductees
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <WinnerTable games={games} history={history} />
      </Grid>
      <Grid item xs={12} style={{marginTop: '-2em'}}>
        <StarDecoration />
      </Grid>
    </div>
  );
}

export default Winners;
