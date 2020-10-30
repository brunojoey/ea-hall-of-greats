import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import RundownTable from "../Table/rundownTable";
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatFourthRundown(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 4);
      setGames(data);
      console.log('games', games)
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h4' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>The Voting Rundown</Typography>
      <RundownTable games={games} history={history} />
    </div>
  );
}

export default HallOfGreatFourthRundown;