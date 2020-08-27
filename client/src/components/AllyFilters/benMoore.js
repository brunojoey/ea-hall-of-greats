import React, { useEffect, useState } from "react";
import gamesAPI from "../../utils/gamesAPI";
import AllyTable from '../Table/allyTable';

function BenMoore(props) {
  const [games, setGames] = useState([]);
  const { history } = props;
  console.log('props', props);

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log("DATA", data);
      data = data.filter((games) => games.ally === 'Ben Moore');
      console.log("NEW DATA", data);
      setGames(data);
    }

    fetchData();
  }, []);

  if (games) {
  return (
    <div key={games._id}>
      <h2 style={{textAlign: 'center'}}>Ben Moore's Picks</h2>
      <AllyTable games={games} history={history} />
    </div>
  );
}};

export default BenMoore;
