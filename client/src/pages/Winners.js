import React, { useEffect, useState } from "react";
import gamesAPI from "../utils/gamesAPI";
import { Grid, Typography } from "@material-ui/core";

function Winners() {
  const [gameState, setGameState] = useState();

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log("DATA", data);
      data = data.filter((games) => games.victory === true);
      console.log("NEW DATA", data);
      setGameState(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography
        variant="h2"
        style={{ marginTop: "1em", textAlign: "center" }}
      >
        The Illustrious Inductees
      </Typography>
      {gameState.map((games) => {
        return (
          <>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                {games.ally}
              </Grid>
              <Grid item xs={4}>
                {games.game}
              </Grid>
              <Grid istem xs={4}>
                {games.description}
              </Grid>
              <Grid item xs={4}>
                {games.image}
              </Grid>
            </Grid>
          </>
        );
      })}
      )
    </div>
  );
}

export default Winners;
