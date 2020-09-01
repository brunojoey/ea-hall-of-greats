import React from "react";
import NomineeTable from "../components/Table/nomineeTable";
import { Grid, Typography } from "@material-ui/core";

function Nominations(props) {
  const { history } = props;

  return (
    <div>
      <Grid container >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            style={{ marginTop: ".5em", textAlign: "center" }}
          >
            The Notorious Nominees
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            style={{textAlign: "center", marginBottom: '.5em' }}
          >
            {/* Here you can sort by Hall of Great Ceremony, by Votes, by Ally, if it was Banned or Victorius, or by their Name. */}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ margin: '0 2em 0 2em' }}>
          <NomineeTable history={history} style={{placeItems: 'center'}} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Nominations;
