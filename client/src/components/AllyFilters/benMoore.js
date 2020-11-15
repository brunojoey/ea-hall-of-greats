import React, { useEffect, useState } from "react";
import gamesAPI from "../../utils/gamesAPI";
import AllyTable from '../Table/allyTable';

function BenMoore(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Ben Moore');
      setGames(data);
    }

    fetchData();
  }, []);

  if (games) {
  return (
    <div>
      <h3 className='ally-title'>Ben Moores' Picks</h3>
      <AllyTable games={games} history={history} />
    </div>
  );
}};

export default BenMoore;
