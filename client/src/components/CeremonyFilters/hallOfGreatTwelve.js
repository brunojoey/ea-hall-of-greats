import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import CeremonyTable from "../Table/ceremonyTable";
import HogTwelveRundown from '../RundownFilters/hallOfGreatsTwelve';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 12);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h3 className='hall-title'>The Twelfth Hall of Greats</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=BBwj6gpT_MM' className='hallOfGreatVideo' alt='Hall of Greats #12 https://www.youtube.com/watch?v=BBwj6gpT_MM'/>
      <CeremonyTable games={games} history={history} />
      <HogTwelveRundown games={games} history={history} />
    </div>
  );
}

export default HallOfGreatOne;
