import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogSixRundown from '../RundownFilters/hallOfGreatsSix';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 6);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h3 className='hall-title'>The Sixth Hall of Greats</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=tvmPWJQdIeg" className='hallOfGreatVideo' alt='Hall of Greats #6 https://www.youtube.com/watch?v=tvmPWJQdIeg' />
      <CeremonyTable games={games} history={history} />
      <HogSixRundown games={games} history={history} />  
    </div>
  );
}

export default HallOfGreatOne;
