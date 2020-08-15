import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./Pages.css";

function Home() {
  return (
    <div style={{ textAlign: "center", marginBottom: "15em" }}>
      <Grid container spacing={3} style={{ margin: "0 auto" }}>
        <Grid item xs={12}>
          <Typography variant="h2" style={{ marginTop: ".5em" }}>
            The Hall of Greats
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <p>
            The Easy Allies have been conducting their own Hall of Fame for
            video games they like to call 'THE HALL OF GREATS'!
          </p>
          <p>
            The inagural ceremony happened in February of 2017. Ever since,
            every three to four months the Allies gather to decide the best
            games of each ceremony to induct into the Hall of Greats!
          </p>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">The Rules!</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <li>
              Starting with the eighth Hall of Greats, alliances were banned.
            </li>
            <li>
              Starting with the fifth Hall of Greats, a person cannot vote for
              their own game that they have nominated.
            </li>
            <li>
              Starting with the second Hall of Greats, games that received no
              votes from other Allies are banned for one year.{" "}
            </li>
            <li>
              If the first, second, and/or third games are tied Patreon will
              choose the game, or games, between the tied games to be inducted.{" "}
            </li>
            <li>
              Each Ally has six votes. Their first choice for induction will
              receive three points, the second choice will receive two points,
              and their last choice will receive one.
            </li>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
