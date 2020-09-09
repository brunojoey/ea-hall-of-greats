import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import AllyTable from '../AllyTable/allyTable';
import gamesAPI from "../../utils/gamesAPI";

function KyleBosman(props) {
  const [ally, setAlly] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Kyle Bosman');
      setAlly(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h4' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>Kyle Bosman's Picks</Typography>
      <AllyTable games={ally} history={history} />
    </div>
  );
}

export default KyleBosman;
