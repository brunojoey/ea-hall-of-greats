import { useEffect, useState } from "react";
import gamesAPI from "../../utils/gamesAPI";
import AllyTable from '../Table/allyTable';

function BradEllis({ history }) {
  const [ally, setAlly] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Brad Ellis');
      setAlly(data);
    }

    fetchData();
  }, []);

  return (
    <main className='ally-page'>
      <h3 className='ally-page-title'>Brad Ellis' Picks</h3>
      <AllyTable games={ally} history={history} />
    </main>
  );
};

export default BradEllis;