import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogEightRundown from '../RundownFilters/hallOfGreatsEight';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 8);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h3 className='hall-title'>The Eighth Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=LKvBxu0tB0A' className='hallOfGreatVideo' alt='Hall of Greats #8 https://www.youtube.com/watch?v=LKvBxu0tB0A' />
      <CeremonyTable games={games} history={history} />
      <HogEightRundown games={games} history={history} />  
    </div>
  );
};

export default HallOfGreatOne;
