import { useEffect, useState } from "react";
import AllyTable from '../Table/allyTable';
import gamesAPI from "../../utils/gamesAPI";

function MichaelDamiani({ history }) {
  const [ally, setAlly] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Michael Damiani');
      setAlly(data);
    }

    fetchData();
  }, []);

  return (
    <main className='ally-page'>
      <h3 className='ally-page-title'>Michael Damianis' Picks</h3>
      <AllyTable games={ally} history={history} />
    </main>
  );
};

export default MichaelDamiani;