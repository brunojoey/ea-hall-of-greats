import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function Winners() {
  return (
    <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h2' style={{marginTop: '1em', textAlign: 'center'}}>The Illustrious Inductees</Typography>
            </Grid>
        </Grid>
    </div>
  )
};

export default Winners;