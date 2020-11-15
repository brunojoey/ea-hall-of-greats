import React, { useEffect, useState } from "react";
import gamesAPI from "../../utils/gamesAPI";
import AllyTable from '../Table/allyTable';

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
      <h3 className='ally-title'>Brad Ellis' Picks</h3>
      <AllyTable games={ally} history={history} />
    </div>
  );
}

export default BradEllis;
