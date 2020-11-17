import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogThreeRundown from '../RundownFilters/hallOfGreatsThree';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 3);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className='hall-page'>
      <h3 className='hall-page-title'>The Third Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=f3XsR6Z5Rlw' className='hall-page-video' alt='Hall of Greats #3 https://www.youtube.com/watch?v=f3XsR6Z5Rlw'/>
      <CeremonyTable games={games} history={history} />
      <HogThreeRundown games={games} history={history} />  
    </main>
  );
}

export default HallOfGreatOne;
