import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import AllyTable from '../Table/allyTable';
import gamesAPI from "../../utils/gamesAPI";

function MichaelDamiani(props) {
  const [ally, setAlly] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Michael Damiani');
      setAlly(data);
    }

    fetchData();
  }, []);

  if (ally) {
    return (
      <div>
      <Typography variant='h4' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>Michael Damiani's Picks</Typography>
        <AllyTable games={ally} history={history} />
      </div>
    );
  }
}

export default MichaelDamiani;
