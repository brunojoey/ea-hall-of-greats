import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import gamesAPI from "../../utils/gamesAPI";
import AllyTable from '../AllyTable/allyTable';

function BradEllis(props) {
  const [ally, setAlly] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Brad Ellis');
      setAlly(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h4' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>Brad Ellis' Picks</Typography>
      <AllyTable games={ally} history={history} />
    </div>
  );
}

export default BradEllis;
