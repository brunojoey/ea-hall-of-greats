import React from "react";
import { Grid, Typography } from '@material-ui/core';

function Home() {
  return (
    <>
      <div>
        <Grid container spacing={3} style={{backgroundColor: 'red', margin: '0 auto', textAlign: 'center'}}>
          <Grid item xs={10}>
              <Typography variant='h1'><strong>Easy Allies</strong></Typography>
            </Grid>
          <Grid item xs={10}>
            <Typography variant='h2'>The Hall of Greats</Typography>
            </Grid>
          <Grid item xs={10}>
              <Typography variant='p'>Description</Typography>
            </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
