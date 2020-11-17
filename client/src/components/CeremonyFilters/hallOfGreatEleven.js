import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogElevenRundown from '../RundownFilters/hallOfGreatsEleven';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 11);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className='hall-page'>
      <h3 className='hall-page-title'>The Eleventh Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=fEJXc01mxGI' className='hall-page-video' alt='Hall of Greats #11 https://www.youtube.com/watch?v=fEJXc01mxGI' />
      <CeremonyTable games={games} history={history} />
      <HogElevenRundown games={games} history={history} />  
    </main>
  );
}

export default HallOfGreatOne;
