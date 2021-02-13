import { useEffect, useState } from "react";
import AllyTable from '../Table/allyTable';
import gamesAPI from "../../utils/gamesAPI";

function KyleBosman({ history }) {
  const [ally, setAlly] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Kyle Bosman');
      setAlly(data);
    }

    fetchData();
  }, [setAlly]);

  return (
    <main className='ally-page'>
      <h3 className='ally-page-title'>Kyle Bosmans' Picks</h3>
      <p style={{textAlign: 'center'}}>Kyle's Last Induction was Hall of Greats 12.</p>
      <AllyTable games={ally} history={history} />
    </main>
  );
};

export default KyleBosman;