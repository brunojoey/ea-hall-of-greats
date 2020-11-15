import React, { useEffect, useState } from "react";
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

  return (
    <div>
      <h3 className='ally-title'>Michael Damianis' Picks</h3>
      <AllyTable games={ally} history={history} />
    </div>
    );
}

export default MichaelDamiani;
