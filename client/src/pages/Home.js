import React from "react";
import { Grid, Typography } from "@material-ui/core";
import StarDecoration from '../components/StarDecoration';
import "./Pages.css";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <Grid container style={{ margin: "0 auto", marginTop: '-3em' }}>
      <StarDecoration />
        <Grid item xs={12}>
          <Typography
            variant="h1"
            style={{ marginTop: ".35em" }}
          >
            The Hall of Greats
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1em" }}>
          <p className='description'>
            The Easy Allies have been conducting their own Hall of Fame for
            video games they like to call 'THE HALL OF GREATS'!
          </p>
          <p className='description'>
            The inagural ceremony happened in February of 2017. Ever since,
            every three to four months the Allies gather to decide the best
            games of each ceremony to induct into the Hall of Greats!
          </p>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={{ marginBottom: ".4em" }}>
            The Rules
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1em" }}>
          <Typography className='rules_list'>
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
              If the second and third games are tied, the Patreon Easy Allies community will choose the
              game between the tied games to be inducted.{" "}
            </li>
            <li>
              Each Ally has six votes. Their first choice for induction will
              receive three points, the second choice will receive two points,
              and their last choice will receive one.
            </li>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={{ marginBottom: ".4em" }}>
            The Current Bans
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "1em" }}>
          <Typography className='current_bans'>
            <li>Dungeons &#38; Dragons (Until Q4 2020)</li>
            <li>Huntdown (Until Q2 2021)</li>
          </Typography>
        </Grid>
        <Grid item xs={12} style={{marginBottom: '2.5em', marginTop: '-3.5em'}}>
          <StarDecoration />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
