import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogFourRundown from '../RundownFilters/hallOfGreatsFour';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 4);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className='hall-page'>
      <h3 className='hall-page-title'>The Fourth Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=ofLt2fvhsDQ' className='hall-page-video' alt='Hall of Greats #4 https://www.youtube.com/watch?v=ofLt2fvhsDQ' />
      <CeremonyTable games={games} history={history} />
      <HogFourRundown games={games} history={history} />  
    </main>
  );
}

export default HallOfGreatOne;
