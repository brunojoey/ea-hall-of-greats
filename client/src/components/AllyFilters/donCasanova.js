import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import AllyTable from '../AllyTable/allyTable';
import gamesAPI from "../../utils/gamesAPI";

function DonCasanova(props) {
  const [ally, setAlly] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Don Casanova');
      setAlly(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h4' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>Don Casanova's Picks</Typography>
      <AllyTable games={ally} history={history} />
    </div>
  );
};

export default DonCasanova;