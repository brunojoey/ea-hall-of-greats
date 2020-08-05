import React, { useEffect, useState } from 'react';
import gamesAPI from '../utils/gamesAPI';
import { Grid, Typography } from '@material-ui/core';

function Winners() {
  const [gameState, setGameState] = useState();

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log('DATA', data);
      data = data.filter(games => games.victory === true);

      setGameState(data);
    }

    fetchData();
  }, [])

  return (
    <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h2' style={{marginTop: '1em', textAlign: 'center'}}>The Illustrious Inductees</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h2' style={{marginTop: '1em', textAlign: 'center'}}>GAMES GO HERE</Typography>
          </Grid>
        </Grid>
    </div>
  )
};

export default Winners;