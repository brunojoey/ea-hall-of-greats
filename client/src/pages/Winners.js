import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

function Winners() {

  useEffect(() => {

  })

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