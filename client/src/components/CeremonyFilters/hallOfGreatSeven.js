import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogSevenRundown from '../RundownFilters/hallOfGreatsSeven';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props; 

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 7);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className='hall-page'>
      <h3 className='hall-page-title'>The Seventh Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=KI8NvlEo18g' className='hall-page-video' alt='Hall of Greats #7 https://www.youtube.com/watch?v=KI8NvlEo18g' />
      <CeremonyTable games={games} history={history} />
      <HogSevenRundown games={games} history={history} />  
    </main>
  );
}

export default HallOfGreatOne;
