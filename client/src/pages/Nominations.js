import React from "react";
import TableNominees from "../components/Table";
import { Grid, Typography } from "@material-ui/core";

function Nominations( ) {

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            style={{ marginTop: ".5em", textAlign: "center" }}
          >
            The Nominees
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            style={{ marginTop: "1em", textAlign: "center" }}
          >
            Here you can sort by Hall of Great Ceremony, by Votes, by Ally, if it was Banned or Victorius, or by their Name.
          </Typography>
        </Grid>
        <Grid item xs={12} style={{alignItems: 'center', margin: '0 2em 0 2em' }}>
          <TableNominees style={{placeItems: 'center'}} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Nominations;
