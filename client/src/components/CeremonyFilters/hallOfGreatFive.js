import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogFiveRundown from '../RundownFilters/hallOfGreatsFive';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 5);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className='hall-page'>
      <h3 className='hall-page-title'>The Fifth Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=Ka5kRNop_Kk' className='hall-page-video' alt='Hall of Greats #5 https://www.youtube.com/watch?v=Ka5kRNop_Kk'/>
      <CeremonyTable games={games} history={history} />
      <HogFiveRundown games={games} history={history} />  
    </main>
  );
}

export default HallOfGreatOne;
