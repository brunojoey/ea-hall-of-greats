import React, { useEffect, useState } from "react";
import AllyTable from '../Table/allyTable';
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
      <h3 className='ally-title'>Don Casanovas' Picks</h3>
      <AllyTable games={ally} history={history} />
    </div>
  );
};

export default DonCasanova;