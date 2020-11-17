import React, { useEffect, useState } from "react";
import gamesAPI from "../../utils/gamesAPI";
import AllyTable from '../Table/allyTable';

function BenMoore(props) {
  const [ally, setAlly] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Ben Moore');
      setAlly(data);
    }

    fetchData();
  }, []);

  return (
    <main className='ally-page'>
      <h3 className='ally-page-title'>Ben Moores' Picks</h3>
      <AllyTable games={ally} history={history} />
    </main>
  );
};

export default BenMoore;
