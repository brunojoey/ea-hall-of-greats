import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogTwoRundown from '../RundownFilters/hallOfGreatsTwo';
import gamesAPI from "../../utils/gamesAPI";

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
    <main className='hall-page'>
      <h3 className='hall-page-title'>The Second Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=4dqdQAJk90g' className='hall-page-video' alt='Hall of Greats #2 https://www.youtube.com/watch?v=4dqdQAJk90g'/>
      <CeremonyTable games={games} history={history} />
      <HogTwoRundown games={games} history={history} />
    </main>
  );
}

export default HallOfGreatOne;
