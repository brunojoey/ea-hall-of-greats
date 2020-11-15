import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import gamesAPI from "../../utils/gamesAPI";
import HogTwoRundown from '../RundownFilters/hallOfGreatsTwo';
import CeremonyTable from "../Table/ceremonyTable";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 2);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h3 className='hall-title'>The Second Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=4dqdQAJk90g' className='hallOfGreatVideo' alt='Hall of Greats #2 https://www.youtube.com/watch?v=4dqdQAJk90g'/>
      <CeremonyTable games={games} history={history} />
      <HogTwoRundown games={games} history={history} />
    </div>
  );
}

export default HallOfGreatOne;
