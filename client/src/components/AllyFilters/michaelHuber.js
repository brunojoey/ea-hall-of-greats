import { useEffect, useState } from "react";
import AllyTable from '../Table/allyTable';
import gamesAPI from "../../utils/gamesAPI";

function MichaelHuber(props) {
  const [ally, setAlly] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Michael Huber');
      setAlly(data);
    }

    fetchData();
  }, []);

  return (
    <main className='ally-page'>      
      <h3 className='ally-page-title'>Michael Hubers' Picks</h3>
      <AllyTable games={ally} history={history} />
    </main>
  );
}

export default MichaelHuber;
