import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogNineRundown from '../RundownFilters/hallOfGreatsNine';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 9);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h3 className='hall-title'>The Ninth Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=SxhlPJK4J0g' className='hallOfGreatVideo' alt='Hall of Greats #9 https://www.youtube.com/watch?v=SxhlPJK4J0g' />
      <CeremonyTable games={games} history={history} />
      <HogNineRundown games={games} history={history} />  
    </div>
  );
}

export default HallOfGreatOne;
