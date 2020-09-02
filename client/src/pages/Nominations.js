import React from "react";
import NomineeTable from "../components/Table/nomineeTable";
import StarDecoration from "../components/StarDecoration";
import { Grid, Typography } from "@material-ui/core";

function Nominations(props) {
  const { history } = props;

  return (
    <div style={{ marginBottom: "3em", marginTop: "-3em" }}>
      <Grid container>
        <StarDecoration />
        <Grid item xs={12}>
          <Typography
            variant="h2"
            style={{ margin: ".5em 0 .5em 0", textAlign: "center" }}
          >
            The Notorious Nominees
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ margin: "0 2em 0 2em" }}>
          <NomineeTable history={history} style={{ placeItems: "center" }} />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "-2em" }}>
          <StarDecoration />
        </Grid>
      </Grid>
    </div>
  );
}

export default Nominations;
