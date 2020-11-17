import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogThirteenRundown from '../RundownFilters/hallOfGreatsThirteen';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 13);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className='hall-page'>
      <h3 className='hall-page-title'>The Thirteenth Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=03jhRyoSUqQ' className='hall-page-video' alt='Hall of Greats #13 https://www.youtube.com/watch?v=03jhRyoSUqQ'/>
      <CeremonyTable games={games} history={history} />
      <HogThirteenRundown games={games} history={history} />  
    </main>
  );
}

export default HallOfGreatOne;
