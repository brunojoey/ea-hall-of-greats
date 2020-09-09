import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import gamesAPI from "../../utils/gamesAPI";
import CeremonyTable from "../CeremonyTable/ceremonyTable";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 12);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h3' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>The Twelfth Hall of Greats</Typography>
      <CeremonyTable games={games} history={history} />
    </div>
  );
}

export default HallOfGreatOne;
