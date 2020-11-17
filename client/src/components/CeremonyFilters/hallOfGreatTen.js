import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogTenRundown from '../RundownFilters/hallOfGreatsTen';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 10);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className='hall-page'> 
      <h3 className='hall-page-title'>The Tenth Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=7vBHZYafUjI' className='hall-page-video' alt='Hall of Greats #10 https://www.youtube.com/watch?v=7vBHZYafUjI' />
      <CeremonyTable games={games} history={history} />
      <HogTenRundown games={games} history={history} />  
    </main>
  );
}

export default HallOfGreatOne;
