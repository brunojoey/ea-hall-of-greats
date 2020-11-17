import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogOneRundown from '../RundownFilters/hallOfGreatsOne';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 1);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className='hall-page'>
      <h3 className='hall-page-title'>The First Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=75w5xT9AOnA' className='hall-page-video' alt='Hall of Greats #1 https://www.youtube.com/watch?v=75w5xT9AOnA' />
      <CeremonyTable games={games} history={history} />
      <HogOneRundown games={games} history={history} />  
    </main>
  );
}

export default HallOfGreatOne;
