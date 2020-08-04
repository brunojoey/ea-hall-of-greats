import React from "react";
import EnhancedTable from "../components/Table";
import { Grid, Typography } from "@material-ui/core";

function Nominations() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            style={{ marginTop: "1em", textAlign: "center" }}
          >
            The Nominees
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            style={{ marginTop: "1em", textAlign: "center" }}
          >
            Here you can sort by Hall of Great Ceremony, by Platform, by Year, by Genre, by Votes, by Ally,
            or by Name of the Games
          </Typography>
        </Grid>
        <Grid item xs={12} style={{alignItems: 'center', margin: '0 2em 0 2em' }}>
          <EnhancedTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default Nominations;
